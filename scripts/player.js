const gradients = [
  "background: linear-gradient(43deg,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
  "background: linear-gradient(43deg,rgb(174, 180, 238) 0%, rgb(233, 227, 148) 100%)",
  "background: linear-gradient(43deg,rgb(238, 174, 174) 0%, rgb(233, 148, 148) 100%)",
  "background: linear-gradient(43deg,rgb(174, 238, 174) 0%, rgb(148, 233, 148) 100%)",
  "background: linear-gradient(43deg,rgb(174, 238, 233) 0%, rgb(148, 148, 233) 100%)",
  "background: linear-gradient(43deg,rgb(233, 174, 238) 0%, rgb(233, 148, 174) 100%)",
  "background: linear-gradient(43deg,rgb(238, 233, 174) 0%, rgb(233, 174, 148) 100%)",
  "background: linear-gradient(43deg,rgb(174, 174, 238) 0%, rgb(233, 148, 233) 100%)",
  "background: linear-gradient(43deg,rgb(238, 174, 233) 0%, rgb(148, 233, 174) 100%)",
  "background: linear-gradient(43deg,rgb(233, 238, 174) 0%, rgb(174, 148, 233) 100%)",
];

const ButtonIds = [
  "player-01",
  "player-02",
  "player-03",
  "player-04",
  "player-05",
  "player-06"
];

// Player-related functions
function playerCheck() {
  const buttonsIds = ['player-01', 'player-02', 'player-03', 'player-04', 'player-05', 'player-06'];
  buttonsIds.forEach((id, index) => {
    console.log(`Button ID: ${id} is at index: ${index}`);
  });
}

function gradientsCheck() {
  const gradients = [
    "linear-gradient(45deg,rgb(243, 163, 246),rgb(200, 185, 209))",
    "linear-gradient(45deg, #4facfe, #00f2fe)",
    "linear-gradient(45deg, #43e97b, #38f9d7)",
    "linear-gradient(45deg, #fa709a, #fee140)",
    "linear-gradient(45deg, #667eea, #764ba2)",
    "linear-gradient(43deg, #E9EEAE, #AE94E9)"
  ];
  gradients.forEach((gradient, index) => {
    console.log(`Gradient: ${gradient} is at index: ${index}`);
  });
}

function crossCheckPlayer() {
  const buttonsIds = ['player-01', 'player-02', 'player-03', 'player-04', 'player-05', 'player-06'];
  const gradients = [
    "linear-gradient(45deg,rgb(243, 163, 246),rgb(200, 185, 209))",
    "linear-gradient(45deg, #4facfe, #00f2fe)",
    "linear-gradient(45deg, #43e97b, #38f9d7)",
    "linear-gradient(45deg, #fa709a, #fee140)",
    "linear-gradient(45deg, #667eea, #764ba2)",
    "linear-gradient(43deg, #E9EEAE, #AE94E9)"
  ];

  const suggestionPlayers = document.querySelectorAll('.suggestions-player');
  suggestionPlayers.forEach((player, index) => {
    player.addEventListener('mouseenter', () => {
      const buttonId = buttonsIds[index];
      const button = document.getElementById(buttonId);
      if (button) {
        button.style.background = gradients[index];
      }
    });

    player.addEventListener('mouseleave', () => {
      const buttonId = buttonsIds[index];
      const button = document.getElementById(buttonId);
      if (button) {
        button.style.background = '';
      }
    });
  });
}

// Export the functions
export { playerCheck, gradientsCheck, crossCheckPlayer };

