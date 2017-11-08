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
	audio.src = dir_path + '/music/' + element.id + '/1.wav' ;
	// body要素の一番後ろに[audio]を生成する
	document.body.appendChild( audio );

	// [currentTime]を認識した場合のみ、処理をする
	if( typeof( document.getElementById( audio.id ).currentTime ) != 'undefined' )
	{
		document.getElementById( audio.id ).currentTime = 0;
	}
	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( audio.id ).play() ;
}
