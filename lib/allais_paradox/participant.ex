defmodule AllaisParadox.Participant do
  alias AllaisParadox.Actions

  # Actions
  def fetch_contents(data, id) do
    Actions.update_participant_contents(data, id)
  end

  def next_question(data, id, selected) do
    IO.puts(selected["next"])
    data = data |> put_in([:participants, id, :sequence], selected["next"])
    if selected["next"] == "question2" do
      data = data |> put_in([:participants, id, :question1], selected["selected"])
    end
    if selected["next"] == "answered" do
      data = data |> Map.put(:answered, data.answered + 1)
      data = data |> put_in([:participants, id, :question2], selected["selected"])
    end
    Actions.next_question(data, id, selected)
  end

  # Utilities
  def format_participant(participant), do: participant

  def format_data(data) do
    %{
      page: data.page,
    }
  end

  def format_contents(data, id) do
    %{participants: participants} = data
    participant = Map.get(participants, id)
    format_participant(participant)
      |> Map.merge(format_data(data))
  end
end



