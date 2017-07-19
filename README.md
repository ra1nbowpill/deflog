# [Deflog](https://github.com/sbruno/deflog)


## Description

This program tries to eliminate several characteristics of the language flogger, like repetition of letters, alternation of uppercase and lowercase, abbreviations of sms, etc. for spanish. It is presented in a number of versions:


### Web Versions

* [PHP](./php/)
* [Javascript](./javascript/)
* [Python w/ cherrypy](./python-cherrypy/)

### Desktop Versions

* [PyQT4](./pyqt/)
* [CLI](./deflog.py)
* Others
	- [Plugin for Messenger Plus! Live](./msnlive_plugin/)
	- [Python module](./pylibdeflog/)


## Screenshots

### Online version:

![Online version](http://bananabruno.googlepages.com/deflog-javascript-screenshot-small.jpg)

### Messenger Plus! Live Plugin:

![Plugin for Messenger PLus! Live](http://bananabruno.googlepages.com/deflog-msnlive-screenshot-small.jpg)


## Download

The latest stable versions can be downloaded from http://code.google.com/p/deflog/downloads/list

The plugin for Messenger Plus! Live was available through their website : http://www.msgpluslive.net/scripts/view/404-DeFlog/


## Try it !

[PHP Version](http://www.santiagobruno.com.ar/php/desfotologuear.php)

[JS Version](http://www.santiagobruno.com.ar/javascript/desfotologuear.html)


## Description of the methods

Most of the method are made for spanish.

§ = The method is language independant.

All methods can be applied selectively

* **Desmultiplicar §**: Removes letters repetition (holaaaaa -> hola)

* **Deszezear**: Transforms \'z\' in \'s\' (Deactivated by default because it creates more harm than good)

* **Des-k-ar**: Transforms \'k\' in \'q\' (ki -> qui)

* **DesSMSar**: Replace SMS abbreviations (xq -> por que, dsp -> después)

* **Desestupidizar**: (toi -> estoy, i -> y, lemdo -> lindo)

* **Desalternar §**: Convert mixed lowercase uppercase words to lowercase and keeps uppercased word (Letra DE UnA CaNcIoN -> letra DE una cancion)

* **Desporteñar**: Removes finals \'s\'s in words ending in \'istes\' (lo vistes y me dijistes -> lo viste y me dijiste)

* **Deleet §**: Convert l33t 5p34k to standard speak (3s7o e5 un 73x70 f30 -> esto es un texto feo)

* **Fix missing vowels**: Add missing vowels (it doesn\'t work english words) (stamos -> estamos, spero -> espero, dcile -> decile, nterado -> enterado, vrdad -> verdad, comprart, comprarte)
