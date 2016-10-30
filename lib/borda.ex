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

  def wrap_result({:ok, _} = result), do: result
  def wrap_result(result), do: Main.wrap(result)

  def join(data, id) do
    wrap_result(Main.join(data, id))
  end

  # Host router
  def handle_received(data, %{"action" => action, "params" => params}) do
    result = case {action, params} do
      {"fetch contents", _} -> Host.fetch_contents(data)
      {"change page", page} -> Host.change_page(data, page)
      {"all reset", _}      -> Host.all_reset(data)
      _ -> {:ok, %{"data" => data}}
    end
    wrap_result(result)
  end

  # Participant router
  def handle_received(data, %{"action" => action, "params" => params}, id) do
    result = case {action, params} do
      {"fetch contents", _} -> Participant.fetch_contents(data, id)
      {"next question 2", selected} -> Participant.next_question_2(data, id, selected)
      {"next question ans", selected} -> Participant.next_question_ans(data, id, selected)
      _ -> {:ok, %{"data" => data}}
    end
    wrap_result(result)
  end
end
