//o codigo perfeito nao existe

// === Boas vindas ===   
    let nome = prompt("Digite seu nome:");

    // === Cardapio ===
    let menu = "CARDAPIO:\n" +
               "1 - Hamburguer - R$ 20\n" +
               "2 - Pizza - R$ 35\n" +
               "3 - Refrigerante - R$ 5\n" +
               "4 - Batata Frita - R$ 12\n" +
               "5 - Sair";

    // === Variaveis ===
    let pratos = [];    // lista de pratos escolhidos
    let total = 0;      // valor total sem desconto

    // === Cliente escolhe ate 3 pratos ===
    for (let i = 1; i <= 3; i++) {
      let escolha = parseInt(prompt(menu + "\nEscolha o prato " + i + ":"));

      if (escolha === 5) {
        alert("Voce saiu do programa.");
        break;
      }

      let nomePrato = "";
      let precoPrato = 0;

      // Definindo prato com switch
      switch (escolha) {
        case 1:
          nomePrato = "Hamburguer";
          precoPrato = 20;
          break;
        case 2:
          nomePrato = "Pizza";
          precoPrato = 35;
          break;
        case 3:
          nomePrato = "Refrigerante";
          precoPrato = 5;
          break;
        case 4:
          nomePrato = "Batata Frita";
          precoPrato = 12;
          break;
        default:
          alert("Opcao invalida, tente novamente.");
          i--; // volta para repetir a escolha
      }

      // Se prato valido, adiciona a lista
      if (nomePrato !== "") {
        pratos.push({nome: nomePrato, preco: precoPrato});
        total += precoPrato;
        alert("Voce escolheu: " + nomePrato + " - R$ " + precoPrato.toFixed(2));
      }
    }

    // === Pergunta se e estudante ===
    let estudante = prompt("Voce e estudante? (sim/nao)").toLowerCase();

    // === Calculando descontos ===
    let desconto = 0;
    let totalComDesconto = total;

    if (estudante === "sim") {
      desconto += 0.10; // 10% para estudante
    }

    if (total > 50) {
      desconto += 0.05; // 5% se passar de 50
    }

    totalComDesconto = total - (total * desconto);

    // === Montando resumo final ===
    let resumo = "Obrigado " + nome + "!\n";
    resumo += "Pratos escolhidos:\n";

    for (let p of pratos) {
      resumo += "- " + p.nome + " de R$ " + p.preco.toFixed(2) + "\n";
    }

    resumo += "Total sem desconto: R$ " + total.toFixed(2) + "\n";
    resumo += "Total com desconto: R$ " + totalComDesconto.toFixed(2);

    // === Mostra resumo ===
    alert(resumo);
