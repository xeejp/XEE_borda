defmodule Borda do
  use XeeThemeScript
  require Logger

  alias Borda.Main
  alias Borda.Host
  alias Borda.Participant

  # Callbacks
  def script_type do
    :message
  end

  def install, do: nil

  def init do
    {:ok, %{"data" => Main.init()}}
  end


  def join(data, id) do
    new = Main.join(data, id)
    wrap_result(data, new)
  end

  # Host router
  def handle_received(data, %{"action" => action, "params" => params}) do
    Logger.debug("[Borda] #{action} #{inspect params}")
    result = case {action, params} do
      {"fetch contents", _} -> Host.fetch_contents(data)
      {"change page", page} -> Host.change_page(data, page)
      {"all reset", _}      -> Host.all_reset(data)
      _ -> {:ok, %{"data" => data}}
    end
    wrap_result(data,result)
  end

  # Participant router
  def handle_received(data, %{"action" => action, "params" => params}, id) do
    Logger.debug("[Borda] #{action} #{inspect params} #{inspect data}")    
    result = case {action, params} do
      {"fetch contents", _} -> Participant.fetch_contents(data, id)
      {"next question 2", selected} -> Participant.next_question_2(data, id, selected)
      {"next question ans", selected} -> Participant.next_question_ans(data, id, selected)
      _ -> {:ok, %{"data" => data}}
    end
    wrap_result(data, result)
  end

  def compute_diff(old, %{"data" => new} = result) do
    import Participant, only: [filter_data: 2]
    import Host, only: [filter_data: 1]
    host = Map.get(result, "host", %{})
    participant = Map.get(result, "participant", %{})
    participant_tasks = Enum.map(old.participants, fn {id, _} ->
      {id, Task.async(fn -> JsonDiffEx.diff(filter_data(old, id), filter_data(new, id)) end)}
    end)
  host_task = Task.async(fn -> JsonDiffEx.diff(filter_data(old), filter_data(new)) end)
  host_diff = Task.await(host_task)
  participant_diff = Enum.map(participant_tasks, fn {id, task} -> {id, %{diff: Task.await(task)}} end)
                      |> Enum.filter(fn {_, map} -> map_size(map.diff) != 0 end)
                      |> Enum.into(%{})
  host = Map.merge(host, %{diff: host_diff})
  host = if map_size(host.diff) == 0 do
    Map.delete(host, :diff)
  else
    host
  end
  host = if map_size(host) == 0 do
    nil
  else
    host
  end
    participant = Map.merge(participant, participant_diff, fn _k, v1, v2 ->
      Map.merge(v1, v2)
    end)
  %{data: new, host: host, participant: participant}
  end

  def wrap_result(old, {:ok, result}) do
    {:ok, compute_diff(old, result)}
  end

  def wrap_result(old, new) do
    {:ok, compute_diff(old, %{"data" => new})}
  end
end
