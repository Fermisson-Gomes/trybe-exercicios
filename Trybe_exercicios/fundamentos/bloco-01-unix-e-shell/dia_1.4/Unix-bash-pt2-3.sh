# Unix e Bash 1.4 - parte 3

# Exercicio 1

echo -e "listando os precessos em execução"
ps

# Exercicio 2

echo -e "executando o comando sleep"
sleep 30 &

# Exercicio 3

echo -e "listando os processos em execução para encontrar o PID do processo que esta executando o sleep 30"
ps
echo -e "terminando a execução do sleep"
kill %n '(n=possição do processo)'

# Exercicio 4

echo -e "executando o comadno sleep em primeiro plano"
sleep 30
echo -e "interrompendo a execução"
Ctl+Z
echo -e "retornando a execução do sleep em segundo plano"
bg %n '(n=possição do processo)'

# Exercicio 5

echo -e "criando o processo sleep em background"
sleep 300 &

# Exercicio 6

echo -e "criando mais dois comandos sleep em primeiro plano"
sleep 200
echo -e "interrompendo a execução do primeiro sleep"
Ctrl+Z
echo -e "criando o segundo sleep"
sleep 100
echo -e "interrompendo o segundo sleep"
Ctrl+Z

# Exercicio 7

echo -e "verificando que apenas o sleep 300 esta em execução"
jobs
echo -e "trazendo o processo sleep 300 para o primeiro plano"
fg %n '(n=posição do processo)'
echo -e "interompendo a execução do sleep 300"
Ctrl+Z

# Exercicio 8

echo -e "retornando a execução do sleep 100 em segundo plano"
bg %n '(n=posição do processo)'


# Exercicio 9

echo -e "termine a execução de todos os processos"
kill %n '(n=posição do processo)'
kill %n '(n=posição do processo)'
kill %n '(n=posição do processo)'


# Fim do exercicio
