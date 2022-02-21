# Unix e Bash 1.3 - parte 1

# Exercicio 1

echo -e "criando o diretorio unix_tests"
mkdir unix_tests
echo -e "navegando para o diretorio unix_tests"
cd unix_tests

# Exercicio 2

echo -e "criando o arquivo trybe.txt"
touch trybe.txt

# Exercicio 3

echo -e "criando a copia do arquivo trybe.txt o nomeando como trybe_backup.txt"
cp trybe.txt trybe_backup.txt

# Exercicio 4

echo -e "renomeando o arquivo trybe.txt"
mv trybe.txt trybe_ex.txt

# Exercicio 5

echo -e "criando o novo diretorio com o nome de backup"
mkdir backup

# Exercicio 6

echo -e "movendo  o arquivo trybe_backup.txt para o diretorio backup"
mv trybe_backup.txt backup

# Exercicio 7

echo -e "criando o diretorio backup2"
mkdir backup2

# Exercicio 8

echo -e "navegando para o diretorio backup"
cd backup
echo -e "movendo o arquivo trybe_backup.txt para o diretorio backup2"
mv trybe_backup.txt  ../backup2

# Exercicio 9

echo -e "navegando para unix_tests novamente"
cd ..
echo -e "apagando o dietorio backup"
rmdir backup

# Exercicio 10

echo -e "renomeando o diretorio backup2 como backup"
mv backup2 backup

# Exercicio 11

echo -e "vendo qual o caminho completo do diretorio atual"
pwd
echo -e "listando os arquivos e diretorios dentro do diretorio atual"
ls

# Exercicio 12

echo -e "apagando o diretorio backup"
rm -rf backup

# Exercicio 13

echo -e "limpando o terminal"
clear

# Extra

echo -e "criando o arquivo skills.txt"
touch skills.txt
echo -e "adicionando o conteudo pedido para os exercicios 14 e 15"
cat > skills.txt

# Exercicio 14

echo -e "mostrando as 5 primeiras linhas do arquivo skills.txt"
head -5 skills.txt

# Exercicio 15

echo -e "mostrando as 4 ultimas linhas do arquivo skills.txt"
tail -4 skills.txt

# Exercicio 16

echo -e "apagando todos os arquivos .txt"
rm *.txt

# Fim dos exercicios :D
