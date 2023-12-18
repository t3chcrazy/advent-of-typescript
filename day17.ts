type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type WhoWins<Opp, Me> = Opp extends Me? "draw": (
	Me extends '👊🏻'? (Opp extends '🖐🏾'? "lose": "win"):
	Me extends '🖐🏾'? (Opp extends '✌🏽'? "lose": "win"):
	Me extends '✌🏽'? (Opp extends '👊🏻'? "lose": "win"):
	never
);
