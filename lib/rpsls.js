/**
 * RPS function
 * @param {*} shot 
 * @returns 
 */
export function rps(shot) {
    const options = ['rock', 'paper', 'scissors'];
    if (shot === undefined)
        return {player: options[Math.floor(Math.random() * 3)]};
    
    /**
     * 0: lose, 1: draw, 2: win
     */
    const outcomes = ['lose', 'draw', 'win'];

    /**
     * Matrix representing game rules.
     * 
     * `rules[i][j]` returns the result of the player shot `i` against the opponent shot `j`.
     * 
     * Matrix rows and columns follow the order given in the options array.
     */
    const rules = [
        [1, 0, 2],
        [2, 1, 0],
        [0, 2, 1]
    ];

    const opponent_str = options[Math.floor(Math.random() * 3)];
    const result_str = outcomes[rules[options.indexOf(shot)][options.indexOf(opponent_str)]];
    return {player: shot, opponent: opponent_str, result: result_str}
}

export function rpsls(shot) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (shot === undefined)
        return {player: options[Math.floor(Math.random() * 5)]};
}