defmodule Borda.Host do
  alias Borda.Main
  alias Borda.Actions

  require Logger

  # Actions

  def filter_data(data) do
    rule=%{
      _default: true,
    }
    data
    |> Transmap.transform(rule)
  end

  def fetch_contents(data) do
    data
    |> Actions.update_host_contents()
  end

  def change_page(data, page) do
    if page in Main.pages do
      %{data | page: page}
    else
      data
    end
  end

  def all_reset(data) do
    :random.seed(:os.timestamp)
    flag = true
    data = data |> Map.put(:participants, Enum.into(Enum.map(data.participants, fn { id, _ } ->
      {id,
        %{
          question_text: data.question_text,
          sequence: "question1",
          question1: 0,
          question2: 0,
          active: true,
          joined: Map.size(data.participants),
          qswap: true,
          oneone: 0,
          onetwo: 0,
          twoone: 0,
          twotwo: 0,
        }
      }
    end), %{}))
                |> Map.put(:joined, Map.size(data.participants))
                |> Map.put(:answered, 0)
                |> Map.put(:oneone, 0)
                |> Map.put(:onetwo, 0)
                |> Map.put(:twoone, 0)
                |> Map.put(:twotwo, 0)
    data = data |> Map.put(:participants, data.participants
                |> Map.merge(data.participants
                |> Enum.shuffle
                |> Enum.take_every(2)
                |> Enum.map(fn {id, value} -> {id, Map.put(value, :qswap, false)} end)
                |> Enum.into(%{})))
  end
end
