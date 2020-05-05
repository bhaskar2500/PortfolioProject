import os
import re
import sys
import nltk
import spacy
import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
from nltk.corpus import stopwords

nlp = spacy.load("en_core_web_sm")
punctuations = '!"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~©'
STOPWORDS = stopwords.words('english')

def cleanup_text(docs, logging=False):
    """
        Tokenize the data and remove the stop words . 
    """    
    texts = []
    sentence_list=[]
    tokens = []
    docs =   docs.replace("\n", "") # We dont need to understand the line breaks.Thus removing     
    doc = nlp(docs)
#     tokens = [tok.lemma_.lower().strip() for tok in doc if tok.lemma_ != '-PRON-']
    for idx, sentence in enumerate(doc.sents): # we are using spacy for sentence tokenization
        sentence_list.append(re.sub(r'[^\w\s]','',str(sentence)))
    
    for sent in sentence_list :
        for tok in sent.split(" "):
            if tok not in STOPWORDS and tok not in punctuations:
                tokens.append(tok)
    return ' '.join(tokens)

def generate_summary(text_without_removing_dot, cleaned_text):
    """
    1. create a word frequency probability list 
    2. On the basis of max frequencey of words filter the sentences which has these words .
    """
    doc = nlp(text_without_removing_dot)
    cleaned_text = cleaned_text.split()
    word_frequencies = {}  

    for word in cleaned_text:  
        if word not in word_frequencies.keys():
            word_frequencies[word] = 1
        else:
            word_frequencies[word] += 1
    maximum_frequncy = max(word_frequencies.values())

    for word in word_frequencies.keys():  
        word_frequencies[word] = (word_frequencies[word]/maximum_frequncy) 
    # print(word_frequencies,'----')
    #as we need actual sentences we need to parse initial_data before cleanup
    sentence_scores = {} 
    frequency_keys=  list(word_frequencies.keys())
    for sent in doc.sents:
        for word in str(sent).split(" "):
            if word in frequency_keys:
                if sent not in sentence_scores.keys():
                    sentence_scores[sent] = word_frequencies[word]
                else:
                    sentence_scores[sent] += word_frequencies[word]
    tup = list(sentence_scores.items())

    tup.sort(key = lambda x: x[1],reverse=True)  
    return tup
try:
    initial_text = sys.argv[1]

    cleaned_text = cleanup_text(initial_text)
    tup = generate_summary(initial_text,cleaned_text)
    result=''.join([str(tup[i][0]) for i in range(len(tup)//3)])
    print(result)
except Exception as ex:
    print(str(ex))
