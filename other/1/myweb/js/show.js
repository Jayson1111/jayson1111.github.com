define(function(require,exports,module){
	require('jquery-1.7.2.js');
	exports.show=function(){
		seajs.use(['head_nav','sudoku','work','opening_animation','block_motion','delayed_load','audio_play','scrollTop','automatic_play'],
		function(mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9){
			mod1.head_nav();
			mod2.sudoku();
			mod3.work();
			mod4.opening_animation();
			mod5.block_motion();
			mod6.delayed_load();
			mod7.audio_play();
			mod8.scrollTop();
			mod9.automatic_play();
		});
	};
});