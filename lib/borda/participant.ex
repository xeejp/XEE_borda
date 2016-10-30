defmodule Borda.Participant do
  alias Borda.Actions

  # Actions
  def filter_data(data, id) do
    rule=%{
      page: true,
      joined: true,
      participants: %{
        id => %{
          _default: true,
          joined: "joinedNumber"
        }
      },
      _spread: [[:participants, id]]
    }
    
    data
    |> Transmap.transform(rule)
  end
  def fetch_contents(data, id) do
    Actions.update_participant_contents(data, id)
  end

  def next_question_2(data, id, selected) do
    IO.puts(selected["next"])
    data = data |> put_in([:participants, id, :sequence], selected["next"])
    data = data |> put_in([:participants, id, :question1], selected["selected"])
  end

  def next_question_ans(data, id, selected) do
    IO.puts(selected["next"])
    data = data |> put_in([:participants, id, :sequence], selected["next"])
    data = data |> Map.put(:answered, data.answered + 1)
    data = data |> put_in([:participants, id, :question2], selected["selected"])
  end
end



