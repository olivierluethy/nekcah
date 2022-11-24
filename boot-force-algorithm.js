/* Boot force algorithm to crack password of a user on a website */
function tryCombinations(){
    // Das eingegebene Passwort
let password = tbxEntPassword.Text.ToString();

// Anzahl Versuche
let attempt = "";

let first = 0, second = 0, third = 0, fourth = 0, fifth = 0, sixth = 0, seventh = 0, eigth = 0, cracks = 0;

while (!attempt.Equals(password))
{
  if (first == characters.Length)
  {
    second++;
    first = 0;
  }
  if (second == characters.Length)
  {
    third++;
    second = 0;
  }
  if (third == characters.Length)
  {
    fourth++;
    third = 0;
  }
  if (fourth == characters.Length)
  {
    fifth++;
    fourth = 0;
  }
  if (fifth == characters.Length)
  {
    sixth++;
    fifth = 0;
  }
  if (sixth == characters.Length)
  {
    seventh++;
    sixth = 0;
  }
  if (seventh == characters.Length)
  {
    eigth++;
    seventh = 0;
  }
  if (eigth == characters.Length)
  {
    break;
  }

  attempt = characters[eigth] + characters[seventh] + characters[sixth] + characters[fifth] + characters[fourth] + characters[third] + characters[second] + characters[first];

  if (attempt == password)
  {
    listPossible.Items.Add("Final Crack: " + attempt.ToString());
  }else
  {
    listPossible.Items.Add(attempt.ToString());
  }
  first++;
  cracks++;
}
lblAttemps.Content = "Attemps to crack: " + cracks;
}

