import {By,Builder,Key} from "selenium-webdriver"
import { should } from "chai"
should()

async function adicionarTask() {
    
    //Chamar o Driver
    let Driver = await new Builder().forBrowser("firefox").build();

    //Abrir o navegador
    await Driver.get ("https://herziopinto.github.io/lista-de-tarefas/")

    //  Elemento For , digite o texto e clique na tecla RETURN
    for (let on= 1; on <= 10; on++) {
        await Driver.findElement(By.id("inputTask")).sendKeys("Aprender selenium" + on, Key.RETURN)
     };


     // Asserção/Validação
        for (let on = 1; on <= 10; on++) {
            let taskElement = await Driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label"));
            let seleniumText = await taskElement.getText();

            
        await Driver.sleep(3000);

        // Fechar o Navegador
        await Driver.quit();
    }
}
adicionarTask()