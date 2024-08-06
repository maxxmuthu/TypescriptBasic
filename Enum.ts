/*
Think of an enum (short for "enumeration") as a way to give names to a set of values. 
It's like creating a custom list of options that you can use in your code. T
his makes your code easier to read and understand.

Example: Days of the Week
Imagine you want to represent the days of the week in your program. You could use numbers to represent each day:

0 for Sunday
1 for Monday
2 for Tuesday
3 for Wednesday
4 for Thursday
5 for Friday
6 for Saturday

But using numbers can be confusing because you might forget which number represents which day. 
Instead, you can use an enum to give each day a clear name.
*/

enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }

let today: DaysOfWeek = DaysOfWeek.Wednesday;
//let today = DaysOfWeek.Wednesday;  // this also will work

console.log(today); // Output: 3 // -> if the value is assigned as Sunday = 1 then it display output as '4'

//=====================================================================

enum Difficulty {
    Easy,
    Medium,
    Hard,
    Expert
  }
  
  function getDifficultyDescription(level: Difficulty): string {
    switch (level) {
      case Difficulty.Easy:
        return "Suitable for beginners.";
      case Difficulty.Medium:
        return "A bit challenging.";
      case Difficulty.Hard:
        return "Quite difficult.";
      case Difficulty.Expert:
        return "For the pros!";
      default:
        return "Unknown difficulty.";
    }
  }
  
  let currentDifficulty = Difficulty.Medium;
  console.log(getDifficultyDescription(currentDifficulty)); // Output: A bit challenging.

  //==============================================================

  enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
  }
  
  function getStatusMessage(status: HttpStatus): string {
    switch (status) {
      case HttpStatus.OK:
        return "Success";
      case HttpStatus.BadRequest:
        return "Bad Request";
      case HttpStatus.NotFound:
        return "Not Found";
      case HttpStatus.InternalServerError:
        return "Internal Server Error";
      default:
        return "Unknown Status";
    }
  }
  
  let currentStatus: HttpStatus = HttpStatus.NotFound;
  console.log(getStatusMessage(currentStatus)); // Output: Not Found

  //==========================================