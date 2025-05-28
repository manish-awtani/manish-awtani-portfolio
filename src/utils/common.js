export const dinoGame = () => {
    const frames = [
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      🦖                               🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          🦖                           🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              🦖                     🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  🦖               🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    🦖           🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                      🦖     🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        ⠀🦖🌵
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                       ⠀  🦖🕳️ 
      ---------------------------------------------
      `,
          `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                         🦖
                     (Jumped Over 🌵)
      ---------------------------------------------
      `,
          `
    👀 Caught you stalking!?
        OR Curiosity led you here..???
      
        Wanna team up? You’re just one email away!
        Let’s build something awesome → manishawtani09@gmail.com 
                                        ------------------------
        Please refresh website, while your console is open to see the dino again! 
      `,
        ];
    
        frames.forEach((frame, index) => {
          setTimeout(() => {
            console.clear();
            console.log(
              `%c${frame}`,
              "color: #1e90ff; font-weight: bold; font-size: 14px;"
            );
          }, index * 900);
        });
}