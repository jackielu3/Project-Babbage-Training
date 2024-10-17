const { createAction } = require("@babbage/sdk-ts");

(async () => {
  try {
    const outputScript =
      "2102aaa7a5a2e386840889732be8d8264d42198f116903ed9f8f2cc9763c0e9958acac0e4d7920666972737420746f6b656e0849276d204d6174744630440220187800c3732512ef3d3ccdf741966b45f4251f879ac933160837a03d1c98a420022064c4d3fb3c07b12c47aae5baef7890e996ffa680e32fb8aa678c7f06ff0d37bd6d75";

    const newTransaction = await createAction({
      outputs: [
        {
          satoshis: 1,
          script: outputScript,
        },
      ],
      description: "Create a new token for lab 1",
    });

    console.log("Transaction created successfully:", newTransaction);
  } catch (error) {
    console.error("Error creating transation:", error);
  }
})();
