# Unix e Bash 1.4 - parte 2

# Exercicio 1

echo -e "navegando para unix_tests"
cd unix_tests

# Exercicio 2

echo -e "analisando as permissões dos arquivos"
ls -l

# Exercicio 3

echo -e "mudando as permissões do arquivo bunch_of_things.txt para que todos possam ter acesso a leitura e escrita"
chmod 666 bunch_of_things.txt
echo -e "verificando se as mudanças foram aplicadas"
ls -l

# Exercicio 4

echo -e "remova a permissão de escrita de todos os usuarios do arquivo bunch_of_things.txt"
chmod 444 bunch_of_things.txt
echo -e "verificando se as mudanças foram aplicadas"
ls -l

# Exercicio 5

echo -e "retornando as permissões do arquivo bunch_of_things.txt a como eram inicialmente"
chmod 644 bunch_of_things.txt

# Fim dos exercicios :D
