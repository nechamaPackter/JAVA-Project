export type ProductModel =
  | {
      id: number,
      productReplacement: false,
      name: string,
      icon: string,
      amount:string
    }
  | {
      id: number,
      productReplacement: true,
      name: string,
      icon: string,
      productNameReplacement: string,
      productAmountReplacement:string,
      amount:string
    };
