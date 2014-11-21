import urllib.request

try: 
	f = urllib.request.urlopen("http://facebook.com")
	print (f.read())
	f.close()
except:
	print("Ocurrió un error")