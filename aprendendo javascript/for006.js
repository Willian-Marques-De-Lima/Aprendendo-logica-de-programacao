for (let regressiva = 10; regressiva > 0; regressiva--) {
    setTimeout(() => {
        console.log(regressiva)
        if (regressiva == 1) {
            setTimeout(() => {
                console.log("Feliz ano novo!")
            }, 1000);
        }
    }, (10 - regressiva) * 1000);
}