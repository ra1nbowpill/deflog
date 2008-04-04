/*http://soledadpenades.com/2007/05/17/arrayindexof-in-internet-explorer/*/
	if(!Array.indexOf){
	    Array.prototype.indexOf = function(obj){
	        for(var i=0; i<this.length; i++){
	            if(this[i]==obj){
	                return i;
	            }
	        }
	        return -1;
	    }
	}



/*
	Cross-Browser Split 0.2.1
	By Steven Levithan <http://stevenlevithan.com>
	MIT license
*/
var nativeSplit = nativeSplit || String.prototype.split;

String.prototype.split = function (s /* separator */, limit) {
	// If separator is not a regex, use the native split method
	if (!(s instanceof RegExp))
		return nativeSplit.apply(this, arguments);

	/* Behavior for limit: If it's...
	 - Undefined: No limit
	 - NaN or zero: Return an empty array
	 - A positive number: Use limit after dropping any decimal
	 - A negative number: No limit
	 - Other: Type-convert, then use the above rules */
	if (limit === undefined || +limit < 0) {
		limit = false;
	} else {
		limit = Math.floor(+limit);
		if (!limit)
			return [];
	}

	var	flags = (s.global ? "g" : "") + (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : ""),
		s2 = new RegExp("^" + s.source + "$", flags),
		output = [],
		lastLastIndex = 0,
		i = 0,
		match;

	if (!s.global)
		s = new RegExp(s.source, "g" + flags);

	while ((!limit || i++ <= limit) && (match = s.exec(this))) {
		var zeroLengthMatch = !match[0].length;

		// Fix IE's infinite-loop-resistant but incorrect lastIndex
		if (zeroLengthMatch && s.lastIndex > match.index)
			s.lastIndex = match.index; // The same as s.lastIndex--

		if (s.lastIndex > lastLastIndex) {
			// Fix browsers whose exec methods don't consistently return undefined for non-participating capturing groups
			if (match.length > 1) {
				match[0].replace(s2, function () {
					for (var j = 1; j < arguments.length - 2; j++) {
						if (arguments[j] === undefined)
							match[j] = undefined;
					}
				});
			}

			output = output.concat(this.slice(lastLastIndex, match.index), (match.index === this.length ? [] : match.slice(1)));
			lastLastIndex = s.lastIndex;
		}

		if (zeroLengthMatch)
			s.lastIndex++;
	}

	return (lastLastIndex === this.length) ?
		(s.test("") ? output : output.concat("")) :
		(limit      ? output : output.concat(this.slice(lastLastIndex)));
};




// http://www.mojavelinux.com/articles/javascript_hashes.html
function Hash()
{
	this.length = 0;
	this.items = new Array();
	for (var i = 0; i < arguments.length; i += 2) {
		if (typeof(arguments[i + 1]) != 'undefined') {
			this.items[arguments[i]] = arguments[i + 1];
			this.length++;
		}
	}
   
	this.removeItem = function(in_key)
	{
		var tmp_value;
		if (typeof(this.items[in_key]) != 'undefined') {
			this.length--;
			var tmp_value = this.items[in_key];
			delete this.items[in_key];
		}
	   
		return tmp_value;
	}

	this.getItem = function(in_key) {
		return this.items[in_key];
	}

	this.setItem = function(in_key, in_value)
	{
		if (typeof(in_value) != 'undefined') {
			if (typeof(this.items[in_key]) == 'undefined') {
				this.length++;
			}

			this.items[in_key] = in_value;
		}
	   
		return in_value;
	}

	this.hasItem = function(in_key)
	{
                //funny bug here... Can't use != 'undefined', since if I check for the key 'reverse', or
                //'length', etc, the function for this object will be returned.
		return typeof(this.items[in_key]) == 'string';
	}
}


// end of borrowed code

function OnEvent_Initialize(MessengerStart)
{
}

function OnEvent_Uninitialize(MessengerExit)
{
}

        function deleet(txt_in) {
        var txt = txt_in;
             if (txt.match(/\b\d+\b/) == null) {
                txt = txt.replace(/0/g, "o");
                txt = txt.replace(/1/g, "i");
                txt = txt.replace(/3/g, "e");
                txt = txt.replace(/4/g, "a");
                txt = txt.replace(/5/g, "s");
                txt = txt.replace(/7/g, "t");

             }
            return txt;
        }
        
        
function isLowerCase(aCharacter)
{
      return (aCharacter >= 'a') && (aCharacter <= 'z')
}

function isUpperCase(aCharacter)
{
      return (aCharacter >= 'A') && (aCharacter <= 'Z')
}

function isLowerCaseString(aString)
{
    i = 0;
    var ret = 1;
    while (i < aString.length && ret) {
        if (isUpperCase(aString[i])) {
            ret = 0;
        }

        i = i + 1;
    }

    return ret;

}



        function desalternar(word_in) {

        var word = word_in;

            if (word.length > 1 && (!((isUpperCase(word[0])) && isLowerCaseString(word.substr(1))))) {
                return word.toLowerCase();
            }
            else {
                return word;
            }

        }


        function desmultiplicar(word) {
            var exceptions = new Array('http','www','://', 'ss', 'ppio', 'ff', 'bb', 'kiss');
            if (word.toLowerCase().match(/^bs[s]+$/)) {
                return 'besos';
            }

            var lword = word.toLowerCase();
            var pos = 0;

           if (exceptions.indexOf(lword) == -1 && lword.substr(0,3) != '...') {
                if (lword.match(/(^|[^l])[l][l]([^l])+/)) {
                    pos = lword.indexOf('ll');
                    return desmultiplicar(lword.substr(0,pos)) + 'll' + desmultiplicar(lword.substr(pos+2));
                }
                if (lword.match(/([^r])+[r][r]([^r])+/)) {
                    pos = lword.indexOf('rr');
                    return desmultiplicar(lword.substr(0,pos)) + 'rr' + desmultiplicar(lword.substr(pos+2));

                }

                /*Los dos casos siguientes se pueden sacar si no se esperan muchas */
                /*palabras en inglï¿½s. Sirve para pasar google, good, teen, etc     */
                if (lword.match(/([^o])+[o][o]([^o])+/)) {
                    pos = lword.indexOf('oo');
                    return desmultiplicar(lword.substr(0,pos)) + 'oo' + desmultiplicar(lword.substr(pos+2));

                }
                if (lword.match(/([^e])+[e][e]([^e])+/)) {
                    pos = lword.indexOf('ee');
                    return desmultiplicar(lword.substr(0,pos)) + 'ee' + desmultiplicar(lword.substr(pos+2));

                }

                return word.replace(/(.)\1+/g,"$1");

            }
            else {
                return word;
            }
        }

        function desms(word) {

            var translations = new Hash('+', 'más',
                                        '+a' , 'masa',
                                        'ad+' , 'además',
                                        'ak' , 'acá',
                                        'asc' , 'al salir de clase',
                                        'asdc' , 'al salir de clase',
                                        'bb', 'bebé',
                                        'bld' , 'boludo',
                                        'blds' , 'boludos',
                                        'bn' , 'bien',
                                        'bno' , 'bueno',
                                        'bss' , 'besos',
                                        'c' , 'se',
                                        'cdo' , 'cuando',
                                        'cel' , 'celular',
                                        'clp' , 'chupame la pija',
                                        'cmo' , 'como',
                                        'd' , 'de',
                                        'dle' , 'dale',
                                        'dsd' , 'desde',
                                        'dsp' , 'después',
                                        'flia' , 'familia',
                                        'fto' , 'foto',
                                        'hdp' , 'hijo de puta',
                                        'hexo' , 'hecho',
                                        'hlqp' , 'hacemos lo que podemos',
                                        'hna' , 'hermana',
                                        'hno' , 'hermano',
                                        'hsta' , 'hasta',
                                        'k' , 'que',
                                        'kpo' , 'capo',
                                        'ksa' , 'casa',
                                        'lpm' , 'la puta madre',
                                        'lpmqtp' , 'la puta madre que te parió',
                                        'lpqtp' , 'la puta que te parió',
                                        'm' , 'me',
                                        'mjor' , 'mejor',
                                        'mjr' , 'mejor',
                                        'msj' , 'mensaje',
                                        'n' , 'en',
                                        'nd' , 'nada',
                                        'nxe' , 'noche',
                                        'ppio' , 'principio',
                                        'pq' , 'porque',
                                        'ps' , 'pues',
                                        'pso' , 'paso',
                                        'pt' , 'pete',
                                        'q' , 'que',
                                        'qn' , 'quien',
                                        'salu2' , 'saludos',
                                        'ss' , 'sos',
                                        'sta' , 'está',
                                        'stan' , 'están',
                                        'stamos' , 'estamos',
                                        'stes' , 'estás',
                                        't' , 'te',
                                        'tas' , 'estás',
                                        'tb' , 'también',
                                        'tbj' , 'trabajo',
                                        'tbn' , 'también',
                                        'tdo' , 'todo',
                                        'tdos' , 'todos',
                                        'tds' , 'todos',
                                        'tgo' , 'tengo',
                                        'tkm', 'te quiero mucho',
                                        'tmb' , 'también',
                                        'tmbn' , 'también',
                                        'tp' , 'tampoco',
                                        'toy' , 'estoy',
                                        'tk' , 'te quiero',
                                        'tq' , 'te quiero',
                                        'vac' , 'vacaciones',
                                        'x' , 'por',
                                        'xa' , 'para',
                                        'xat' , 'chat',
                                        'xk' , 'porque',
                                        'xo' , 'pero',
                                        'xq' , 'porque',
                                        'xqe' , 'porque'
                                        );



            if (translations.hasItem(word.toLowerCase())) {
                return translations.getItem(word.toLowerCase());
            }
            else {
                var lword = word.toLowerCase();
                if (lword.match(/qe/)  || lword.match(/ke/) || lword.match(/qi/)) {
                    lword = lword.replace(/qe/g, 'que');
                    lword = lword.replace(/ke/g, 'que');
                    lword = lword.replace(/qi/g, 'qui');
                    word = lword;
                }

                if (lword.length > 2 && lword.charAt(lword.length-1) == 'q') {
                    lword = lword.substr(0,lword.length-1) + " que";
                    word = lword;
                }

                if (lword.length > 3 && lword.substr(lword.length-2) == 'ms') {
                    lword = lword.substr(0,lword.length-1) + "os";
                    word = lword;
                }

                if (lword.length > 1 && lword.substr(0,2) == 'cn') {
                    lword = "con" + lword.substr(2);
                    word = lword;
                }


                if (lword.length > 2 && lword.substr(0,3) == 'bso') {
                    lword = "be" + lword.substr(1);
                    word = lword;
                }

                if (lword.length > 2 && lword.substr(0,3) == 'bld') {
                    lword = "bolu" + lword.substr(2);
                    word = lword;
                }

                if (lword.length > 3 && lword.substr(0,4) == 'efea') {
                    lword = "agrega" + lword.substr(4) + " a favoritos";
                    word = lword;
                }

                if (lword.length > 4 && lword.substr(0,5) == 'efeen') {
                    lword = "agreguen" + lword.substr(5) + " a favoritos";
                    word = lword;
                }

                if (lword.length > 3 && lword.substr(0,3) == 'mux') {
                    lword = "much" + lword.substr(3);
                    word = lword;
                }

                return word;
            }

        }

        function desestupidizar(word) {
            var translations = new Hash(
                    '10pre' , 'siempre',
                    'arre' , '<alguna sensación>',
                    'ahrre' , '<alguna sensación>',
                    'ahre' , '<alguna sensación>',
                    'ai' , 'ahí/hay/ay',
                    'aios' , 'adiós',
                    'aka' , 'acá',
                    'aki' , 'aquí',
                    'akí' , 'aquí',
                    'anio' , 'año',
                    'bai' , 'bye',
                    'ben' , 'bien',
                    'bem' , 'bien',
                    'bue' , 'bueno',
                    'bzo' , 'beso',
                    'doi' , 'doy',
                    'efe' , 'favorito',
                    'efeo' , 'agrego a mis favoritos',
                    'efen' , 'agreguen a favoritos',
                    'efes' , 'favoritos',
                    'efs' , 'favoritos',
                    'estoi' , 'estoy',
                    'ff' , 'favoritos',
                    'fs' , 'favoritos',
                    'grax', 'gracias',
                    'groxo', 'grosso',
                    'hai' , 'hay',
                    'hoi', 'hoy',
                    'i' , 'y',
                    'ia' , 'ya',
                    'io' , 'yo',
                    'ise' , 'hice',
                    'iwal' , 'igual',
                    'kmo' , 'como',
                    'kn' , 'con',
                    'oi' , 'hoy',
                    'muchio' , 'mucho',
                    'mu' , 'muy',
                    'mui' , 'muy',
                    'nah' , 'nada',
                    'nuche' , 'no se',
                    'nus' , 'nos',
                    'nuse' , 'no se',
                    'ola' , 'hola',
                    'olas' , 'hola',
                    'olaz' , 'hola',
                    'pic' , 'foto',
                    'pick' , 'foto',
                    'pik' , 'foto',
                    'plis' , 'por favor',
                    'pliz' , 'por favor',
                    'plz' , 'por favor',
                    'sho' , 'yo',
                    'sip' , 'si',
                    'soi' , 'soy',
                    'stoi' , 'estoy',
                    'sullo' , 'suyo',
                    'ta' , 'está',
                    'tawena' , 'está buena',
                    'tap' , 'top',
                    'taz' , 'estás',
                    'teno' , 'tengo',
                    'toi' , 'estoy',
                    'toos' , 'todos',
                    'tullo' , 'tuyo',
                    'lav' , 'love',
                    'lov' , 'love',
                    'lendo' , 'lindo',
                    'llendo' , 'yendo',
                    'mua' , 'besos',
                    'muak' , 'besos',
                    'muac' , 'besos',
                    'muack' , 'besos',
                    'muto' , 'mucho',
                    'nah' , 'nada',
                    'nu' , 'no',
                    'nueo' , 'nuevo',
                    'nunk', 'nunca',
                    'nuc' , 'no se',
                    'voi', 'voy',
                    'we' , 'bueno',
                    'wem' , 'bueno',
                    'wno' , 'bueno',
                    'xau' , 'chau',
                    'xfa' , 'por favor');


            if (translations.hasItem(word.toLowerCase())) {
                return translations.getItem(word.toLowerCase());
            }
            else {
                lword = word.toLowerCase();
                if (word.match(/emd/)) {
                    lword = lword.replace(/emd/g, 'ind');
                    word = lword;
                }
                else if (lword.match(/md/)) {
                    lword = lword.replace(/md/g, 'nd');
                    word = lword;
                }
                if (lword.match(/^[i]+$/)) {
                   word = 'y';
                }
                if (lword.length > 2 && lword.substr(0,3) == 'wen')  {
                    lword = "buen" + lword.substr(3);
                    word = lword;
                }
                if (lword.length > 2 && lword.substr(0,3) == 'oka')  {
                    lword = "ok";
                    word = lword;
                }

                return word;
            }
        }

        function desk(word) {
            exceptions = new Array('kiosco', 'kilo', 'kiló', 'fuck', 'punk', 'rock', 'look', 'kiss');
            vocales = new Array('a', 'e', 'i', 'o','u');
            lword = word.toLowerCase();

            if (lword == 'ok') {
                return word;
            }

            i=0;
            while (i < exceptions.length) {
                if (lword.search(exceptions[i]) != -1) {
                    return word;
                }
                i = i + 1;
            }

            if (lword.match(/ki/)) {
                lword = lword.replace(/ki/g, 'qui');
                word = lword;
            }
            if (lword.match(/ke/)) {
                lword = lword.replace(/ke/, 'que');
                word = lword;
            }

            if (lword.length > 2 && lword.charAt(0) == 'k' && vocales.indexOf(lword.charAt(1)) == -1 )  {
                lword = "ka" + lword.substr(1);
                word = lword;
            }


            word = word.replace(/k/g,'c');
            word = word.replace(/K/g,'C');
            return word;
        }

        function desporteniar(word) {
            lword = word.toLowerCase();
            if (lword.length > 5 && lword.substr(lword.length-4) == 'stes')  {
                lword = lword.substr(0,lword.length-1);
                word = lword;
            }
            return word;
        }


        function deszezear(word) {
            exceptions = new Array('arroz', 'feliz', 'zorr', 'azul', 'azucar', 'azúcar', 'conoz');
            lword = word.toLowerCase();

            i=0;
            while (i < exceptions.length) {
                if (lword.search(exceptions[i]) != -1) {
                    return word;
                }
                i = i + 1;
            }

            word = word.replace(/z/g,'s');
            word = word.replace(/Z/g,'S');
            return word;
        }

        function fixmissingvowels(word) {
            vocales = new Array('a', 'e', 'i', 'o','u');
            exceptions = new Array('get', 'cat', 'that', 'best', 'post', 'net', 'chat');
            lword = word.toLowerCase();
            if (exceptions.indexOf(lword) == -1) {
                if (lword.length > 1 && lword.charAt(0) == 'n' && vocales.indexOf(lword.charAt(1)) == -1)  {
                    lword = "en" + lword.substr(1);
                    word = lword;
                }
    
                len = lword.length;
                if (len > 1 && lword[len-1] == 't')  {
                    lword = lword + 'e';
                    word = lword;
                }
    
                if (lword.length > 2 && lword.substr(0,2) == 'vr' && vocales.indexOf(lword.charAt(2)) == -1)  {
                    lword = "ver" + lword.substr(2);
                    word = lword;
                }
    
                if (lword.length > 2 && lword.substr(0,2) == 'ds')  {
                    lword = "des" + lword.substr(2);
                    word = lword;
                }
    
                if (lword.length > 2 && lword.substr(0,2) == 'sp')  {
                    lword = "esp" + lword.substr(2);
                    word = lword;
                }
    
                if (lword.length > 2 && lword.substr(0,2) == 'st')  {
                    lword = "est" + lword.substr(2);
                    word = lword;
                }
            }
            return word;

        }
        
    function desfotologuear(original, deszezear_value, desk_value, desestupidizar_value, desms_value, fixmissingvowels_value) {

        var words = original.split(/([\w\dáéíóúñ+]+)/);
        var result = "";
        var i = 0;
        while (i < words.length)
        {
            temp_result = desmultiplicar(desalternar(deleet(words[i])));


            if (desms_value) {
                temp_result = desms(temp_result);
            }

            if (desestupidizar_value) {
                temp_result = desestupidizar(temp_result);
            }

            if (deszezear_value) {
                temp_result = deszezear(temp_result);
            }
            
            if (desk_value) {
                temp_result = desk(temp_result);
            }

            temp_result = desporteniar(temp_result);

            if (fixmissingvowels_value) {
                temp_result = fixmissingvowels(temp_result);
            }

            result = result + temp_result;

            i = i + 1;
        }


        return result;
    }
        
        
function OnEvent_ChatWndSendMessage(ChatWnd, Message ){
	return desfotologuear(Message,0,1,1,1,1);
}


function OnEvent_ChatWndReceiveMessage(ChatWnd, Origin, Message, MessageKind ){
	if (Messenger.MyName == Origin) {
		return Message;
	}
	else {

	ret = new String;
	ret = desfotologuear(Message,0,1,1,1,1);

// intentos para hacer que de algún resultado util aunque no puede agrandar el tamaño del string por una limitación del messenger
	if (ret.length > Message.length) {
		ret = desfotologuear(Message,0,0,0,1,1);
	}
	if (ret.length > Message.length) {
		ret = desfotologuear(Message,0,0,1,0,1);
	}
	if (ret.length > Message.length) {
		ret = desfotologuear(Message,0,0,1,1,0);
	}
	if (ret.length > Message.length) {
		ret = desfotologuear(Message,0,0,0,0,1);
	}
	if (ret.length > Message.length) {
		ret = desfotologuear(Message,0,0,0,0,0);
	}
	if (ret.length > Message.length) {
		ret = Message;
	}
	return ret;
	}
}
