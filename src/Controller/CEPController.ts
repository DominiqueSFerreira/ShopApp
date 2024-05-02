import CEPModel from "../Model/CEPModel";

export class CEPController {
  static ceps: CEPModel[] = [];

  static async fetchCEP(cep: string): Promise<void> {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        const cepModel = new CEPModel(
          data.cep, 
          data.logradouro, 
          data.bairro, 
          data.localidade, 
          data.uf
        );
        this.ceps.push(cepModel);
      } else {
        console.log('CEP não encontrado')
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  static getCEPs ():CEPModel[]{
    return this.ceps;
  }

}