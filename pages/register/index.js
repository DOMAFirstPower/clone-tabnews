import { useState } from "react";
import { Button, FormControl, TextInput, Stack, Heading } from "@primer/react";
import { Dialog } from '@primer/react/experimental'
import DefaultLayout from "interface/DefaultLayout";

function RegisterPage() {
  return (
    <DefaultLayout 
      contentWidth="small"
      metadata={{
        title: "Cadastro",
        description: "Crie sua conta de forma gratuita."
      }}
    >

      <Stack>
        <Heading as="h1">
          Cadastro
        </Heading>
        <RegisterForm />
      </Stack>

      
    </DefaultLayout>
  );
}

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();

    const requestBody = {username, email, password};

    const response = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
    });

    if (response.status === 201){
      //location.href = "/register/confirm"
      setOpenDialog(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl>
          <FormControl.Label>Nome de usuário</FormControl.Label>
          <TextInput 
            type="text" 
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            block
            />
        </FormControl>

        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <TextInput 
            type="email" 
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            block
            />
        </FormControl>

        <FormControl>
          <FormControl.Label>Senha</FormControl.Label>
          <TextInput 
            type="password" 
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            block
            />
        </FormControl>

        <Stack.Item>
          <Button type="submit" variant="primary">Criar Cadastro</Button>
          {openDialog && (
            <Dialog
              title="Quase lá!"
              footerButtons={[
                {
                  buttonType: 'default',
                  content: 'OK',
                  onClick: () => {
                    setOpenDialog(false);
                    location.href = "/";
                  },
                },
              ]}
            >
              Verifique seu email para confirmar seu cadastro.
            </Dialog>
          )}
        </Stack.Item>
      </Stack>
    </form>
  );
}

export default RegisterPage