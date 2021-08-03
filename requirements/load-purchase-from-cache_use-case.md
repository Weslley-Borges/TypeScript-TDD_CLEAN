# Carregar as compras do cache

> # Caso de sucesso
1. Sistema executa o comando "Carregar compras"
2. Sistema carregas os dados do cache
3. Sistema valida se cache tem menos de 3 dias
4. Sistema cria uma lista de compras a partir dos dados do cache
5. Sistema retorna a lista de compras

> # Exceção - Cache expirado
1. Sistema limpa o cache
2. Sistema retorna o erro

> # Exceção - Cache vazio
1. Sistema retorna o erro