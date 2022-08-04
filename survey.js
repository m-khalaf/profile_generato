const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
let answers = {};
rl.question('Whats your name? ', (name) => {
  //answers.name=name;
  rl.question('Whats an activity you like doing? ', (activity) => {
    //answers.activity;
    rl.question('What do you listen to while doing that? ', (listen) => {
      //answers.push(listen);
      rl.question('Which meal is your favourite? ', (meal) => {
        //answers.push(meal);
        rl.question('Whats your favourite thing to eat for that meal? ', (eat) => {
          //answers.push(eat);
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            //answers.push(sport);
            rl.question('What is your superpower? ', (superpower) => {
              //answers.push(superpower);
              console.log(`${name} loves listening to ${listen} while ${activity},devouring ${eat} for ${meal},prefers ${sport} over any other sport, and is amazing ${superpower}.`)
              rl.close();

            });


          });

        });

      });

    });

  });
});







rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});