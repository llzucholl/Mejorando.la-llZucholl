class Estudiante:
	def __init__(self,nombre,edad):
		self.nombre = nombre
		self.edad = edad

	def imprime(self):
		print("Hola me llamo %s y tengo %i años" % (self.nombre, self.edad)),

def main():
	e = Estudiante("Zucho", 15)
	e.imprime()

	freddier = Estudiante("Freddy", 2000)
	freddier.imprime()
main()
