defmodule Borda.Main do
  alias Borda.Actions

  @pages ["waiting", "description", "experiment", "result"]
  @sequence ["question1", "question2", "answered"]

  def pages, do: @pages
  def sequence, do: @sequence

  def init do
    %{
      page: "waiting",
      participants: %{},
      joined: 0,
      answered: 0,
        }
  end

  def new_participant(data) do
    %{
      sequence: "question1",
      question1: %{},
      question2: %{},
      active: true,
      joined: data.joined,
      qswap: false,
    }
  end

  def join(data, id) do
    unless Map.has_key?(data.participants, id) do
      new = new_participant(data)
      data
      |> Map.update!(:joined, &(&1+1))
      |>put_in([:participants, id], new)
    else
      data
    end
  end

  def wrap(data) do
    {:ok, %{"data" => data}}
  end
end
