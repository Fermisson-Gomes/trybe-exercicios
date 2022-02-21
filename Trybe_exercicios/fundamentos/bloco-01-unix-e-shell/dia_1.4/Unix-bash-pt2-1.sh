# Unix e Bash 1.4 - parte 1

# Exercicio 1

echo -e "navegando para o diretorio unix_tests"
cd unix_tests

# Exercicio 2

echo -e "criando o arquivo skills2.txt ja pronto para receber conteudo"
cat > skills2.txt

# Exercicio 3

echo -e "adicionando mais 5 itens ao arquivo skills2.txt"
cat >> skills2.txt
echo -e "retornando a lista ordenada no terminal"
sort skills2.txt

# Exercicio 4

echo -e "contando quantas linhas tem o arquivo skills2.txt"
wc -l skills2.txt

# Exercicio 5

echo -e "criando um arquivo chamado top_skills.txt e adicionando como conteudo as 3 primeiras linhas ordenadas do arquivo skills2.txt"
head -3 skills2.txt | sort | cat > top_skills.txt

# Exercicio 6

echo -e "criando o arquivo phrases2.txt ja preparado para receber conteudo"
cat > phrases2.txt

# Exercicio 7

echo -e "contando o numero de linhas com br"
cat phrases2.txt | grep 'br' | wc -l

# exercicio 8

echo -e "contando o numero de linhas sem br"
cat phrases2.txt | grep -v 'br' | wc -l

# Exercicio 9

echo -e "adicionando o nome de dois paises no final de phrases2.txt"
cat >> phrases2.txt

# Exercicio 10

echo -e "criando um arquivo chamado bunch_of_things.txt copiando o conteudo dos arquivos phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt

# Exercicio 11

echo -e "ordenando o arquivo bunch_of_things.txt"
sort bunch_of_things.txt

# Fim dos exercicios :D
