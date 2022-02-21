# Unix e Bash 1.3 - parte 2

delay=2

# Exercicio 1

echo -e "baixando o arquivo 'countries.txt'"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercicio 2

echo -e "mostrando todas as linhas do arquivo 'countries.txt' na tela do terminal"
cat countries.txt
sleep $delay

# Exercicio 3

echo -e  "mostrando as linhas do arquivo 'countries.txt' pagina por pagina em busca de Zambia"
less countries.txt
sleep $delay

# Exercicio 4

echo -e "mostrando novamente as linhas do arquivo 'countries.txt'"
less countries.txt
echo -e "dentro da saida do comando less, buscando Zambia outra vez"
/Zambia
sleep $delay

# Exercicio 5

echo -e "buscando Brazil no arquivo 'countries.txt'"
grep Brazil counties.txt
sleep $delay

# Exercicio 6

echo -e "buscando Brazil no arquivo 'countries.txt' com uso do lower case"
grep -i brazil countries.txt
sleep $delay

# extra 

echo -e "criando o arquivo 'phrases.txt' ja adicionando conteudo a ele"
cat > phrases.txt
sleep $delay

# Exercicio 7

echo -e "buscando frases que não possuem a palavra fox no arquivo 'phrases.txt'"
grep -v phrases.txt
sleep $delay

# Exercicio 8

echo -e "contando o numero de palavras do arquivo 'phrases.txt'"
wc -w phrases.txt
sleep $delay

# Exercicio 9

echo -e "contando o numero de linhas do arquivo 'phrases.txt'"
wc -l phrases.txt
sleep $delay

# Exercicio 10 

echo -e "criando os arquivos 'empty.pdf' e 'empty.tbt'"
touch empty.tbt empty.pdf
sleep $delay

# Exercicio 11

echo -e "listando todos os diretorios e arquivos do diretorio unix_tests"
ls 
sleep $delay

# Exercicio 12

echo -e "listando todos os arquivos que terminam com '.txt'"
ls *.txt
sleep $delay

# Exercicio 13

echo -e "listando todos os arquivos que terminam com '.tbt'"
ls *.tbt
echo -e "listando todos os arquivos que terminam com .pdf"
ls *.pdf
sleep $delay

# Exercicio 14 

echo -e "acessando o manual do comando ls"
man ls
sleep $delay

# Fim dos exercicios :D
