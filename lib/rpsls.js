/**
 * RPS function
 * @param {*} shot 
 * @returns 
 */
export function rps(shot) {
    const options = ['rock', 'paper', 'scissors'];
    if (shot === undefined)
        return {player: options[Math.floor(Math.random() * 3)]};

    shot = shot.toLowerCase();
    if (!(shot in options)) {
        console.error(`${shot} is out of range.`);
        return
    }

    /**
     * rules[player][opponent] returns the result of player vs. opponent
     */
    const rules = {
        'rock': {
            'rock': 'draw',
            'paper': 'lose',
            'scissors': 'win'
        },
        'paper': {
            'rock': 'win',
            'paper': 'draw',
            'scissors': 'lose'
        },
        'scissors': {
            'rock': 'lose',
            'paper': 'win',
            'scissors': 'draw'
        }
    };

    const opponent_str = options[Math.floor(Math.random() * 3)];
    return {player: shot, opponent: opponent_str, result: rules[shot][opponent_str]}
}

export function rpsls(shot) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (shot === undefined)
        return {player: options[Math.floor(Math.random() * 5)]};

    shot = shot.toLowerCase();
    if (!(shot in options)) {
        console.error(`${shot} is out of range.`);
        return;
    }

    /**
     * rules[player][opponent] returns the result of player vs. opponent
     */
    const rules = {
        'rock': {
            'rock': 'draw',
            'paper': 'lose',
            'scissors': 'win',
            'lizard': 'win',
            'spock': 'lose'
        },
        'paper': {
            'rock': 'win',
            'paper': 'draw',
            'scissors': 'lose',
            'lizard': 'lose',
            'spock': 'win'
        },
        'scissors': {
            'rock': 'lose',
            'paper': 'win',
            'scissors': 'draw',
            'lizard': 'win',
            'spock': 'lose'
        },
        'lizard': {
            'rock': 'lose',
            'paper': 'win',
            'scissors': 'lose',
            'lizard': 'draw',
            'spock': 'win'
        },
        'spock': {
            'rock': 'win',
            'paper': 'lose',
            'scissors': 'win',
            'lizard': 'lose',
            'spock': 'draw'
        }
    };

    const opponent_str = options[Math.floor(Math.random() * 5)];
    return {player: shot, opponent: opponent_str, result: rules[shot][opponent_str]}
}