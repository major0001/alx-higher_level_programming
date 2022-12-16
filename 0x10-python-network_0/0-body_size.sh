#!/usr/bin/bash 
# get the byte size of the header of given HTTP response for a given url
curl -s "$1" | wc -c
