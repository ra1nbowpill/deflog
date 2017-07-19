#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Author: Santiago Bruno
# License: GPL v3
# Web pages: http://www.santiagobruno.com.ar/programas.html
#            http://code.google.com/p/deflog/

import re
import sys
import argparse
from pylibdeflog.libdeflog import *


"""
Categorization of the different treatments

    Lang independant
"deleet"            : l33t 5p34k -> leet speak (no transliteration 2morrow -> twomorrow)
"desalternar"       : keep all lowercase or uppercase
"desmultiplicar"    : olaaaaa -> ola (no language model to disambiguate gooood -> {good, god}

    Spanish
"dessmsar"          : using a dictionnary
"desestupidizar"    : using a dictionnary
"deszezear"         : replace s by z
"deskar"            : replace k by c
"desporteniar"      : remove s at the end of word ending in 'istes'
"fixmissingvowels"  : add vowels where they are missing following spanish language rules
"""

ordinate_operations = ['deleet', 'desalternar', 'desmultiplicar', 'dessmsar', 'desestupidizar', 'deszezear', 'deskar', 'desporteniar', 'fixmissingvowels']

func_of_operation = {
    "deleet": deleet,
    "desalternar": desalternar,
    "desmultiplicar": desmultiplicar,
    "dessmsar": lambda x: desms(x, format='plain'),
    "desestupidizar": lambda x: desestupidizar(x, format='plain'),
    "deszezear": deszezear,
    "deskar": desk,
    "desporteniar": desporteniar,
    "fixmissingvowels": fixmissingvowels
}

words_re = re.compile(u"([\\w\\d+]+)", re.UNICODE)

def translate(origText, opt=None):
    if opt is None:
        opt = dict()

    text = dessimbolizar(origText)
    words = words_re.split(text)

    print(words)

    for operation in ordinate_operations:
        try:
            if opt[operation] is True:
                words = map(func_of_operation[operation], words)
        except KeyError as e:
            ()

    return ''.join(words)


def main():

    def arguments():
        parser = argparse.ArgumentParser(description='Translator of Spanish Fotolog and SMS language to Spanish. By default all the rules are applied. Choose the one yu want to apply using the arguments.')

        parser.add_argument('--desmultiplicar', action='store_true', help='Removes letters repetition (holaaaaa -> hola)')
        parser.add_argument('--deszezear', action='store_true', help='Transforms \'z\' in \'s\' (Deactivated by default because it creates more harm than good)')
        parser.add_argument('--deskar', action='store_true', help='Transforms \'k\' in \'q\' (ki -> qui)')
        parser.add_argument('--dessmsar', action='store_true', help='Replace SMS abbreviations (xq -> por que, dsp -> después)')
        parser.add_argument('--desestupidizar', action='store_true', help='(toi -> estoy, i -> y, lemdo -> lindo)')
        parser.add_argument('--desalternar', action='store_true', help='Convert mixed lowercase uppercase words to lowercase and keeps uppercased word (Letra DE UnA CaNcIoN -> letra DE una cancion)')
        parser.add_argument('--desporteniar', action='store_true', help='Removes finals \'s\'s in words ending in \'istes\' (lo vistes y me dijistes -> lo viste y me dijiste)')
        parser.add_argument('--deleet', action='store_true', help='Convert l33t 5p34k to standard speak (3s7o e5 un 73x70 f30 -> esto es un texto feo)')
        parser.add_argument('--missing-vowels', action='store_true', help='Add missing vowels (it doesn\'t work english words) (stamos -> estamos, spero -> espero, dcile -> decile, nterado -> enterado, vrdad -> verdad, comprart, comprarte)')

        parser.add_argument('--lang-independant', action='store_true', help='Shortcut for --deleet --desalternar --desmultiplicar')
        return parser.parse_args()

    args = arguments()

    default_opt = {
        "deleet": True,
        "desalternar": True,
        "desmultiplicar": True,
        "dessmsar": True,
        "desestupidizar": True,
        "deszezear": args.deszezear,
        "deskar": True,
        "desporteniar": True,
        "fixmissingvowels": True
    }

    lang_independant = {
        "deleet": True,
        "desalternar": True,
        "desmultiplicar": True
    }

    opt = dict()

    for key, value in vars(args).items():
        if value and key == 'lang_independant':
            opt.update(lang_independant)
        elif value:
            opt[key] = True

    if not (opt.keys() - {'deszezear'}):
        opt.update(default_opt)

    for line in sys.stdin:
        print(translate(line, opt))


if __name__ == '__main__':
    main()
