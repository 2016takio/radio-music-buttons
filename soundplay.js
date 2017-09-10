function sound(element)
{

	//ファイルのフルパスを取得
	var myPath = location.pathname;
	//フォルダパスを取得
	var dir_path = myPath.split("/").reverse().slice(1).reverse().join("/");

	// 生成するエレメントの調整
	var audio = document.createElement( 'audio' ) ;
	// ID要素を設定
	audio.id = 'sound_' + element.id ;
	// src要素を設定
	audio.src = dir_path + '/music/' + element.id + '/1.mp3' ;
	// body要素の一番後ろに[audio]を生成する
	document.body.appendChild( audio ) ;

	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( audio.id ).play() ;
}
