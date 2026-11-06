import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
// import {SafeAreaView} "react-native-safearea-context";

export default function App() {
  const [showSubmit, setShowSubmit] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    exibirSenha: false,
  });

  const [erros, setErros] = useState({});

  const updateForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validar = () => {
    let novosErros = {};

    if (form.nome.length < 3) {
      novosErros.nome = "Digite seu nome";
    }

    if (form.email.length < 5) {
      novosErros.email = "Digite seu email";
    }

    return novosErros;
  };

  const handleSubmit = () => {
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) return;

    setForm({
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      exibirSenha: false,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <StatusBar style="auto" />
        <View style={{ width: "100%" }}>
          <Text>Nome</Text>
          <TextInput
            value={form.nome}
            style={styles.input}
            onChangeText={(text) => updateForm("nome", text)}
            autoCapitalize="words"
          />
          {erros.nome && <Text style={{ color: "red" }}>{erros.nome}</Text>}
        </View>
        <View style={{ width: "100%" }}>
          <Text>Email</Text>
          <TextInput
            value={form.email}
            style={styles.input}
            onChangeText={(text) => updateForm("email", text)}
            keyboardType="email-address"
          />
          {erros.email && <Text style={{ color: "red" }}>{erros.email}</Text>}
        </View>
        <View style={{ width: "100%" }}>
          <Text>Telefone</Text>
          <TextInput
            value={form.telefone}
            style={styles.input}
            onChangeText={(text) => updateForm("telefone", text)}
            keyboardType="number-pad"
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text>Senha</Text>
          <TextInput
            value={form.senha}
            style={styles.input}
            onChangeText={(text) => updateForm("senha", text)}
            secureTextEntry={!form.exibirSenha}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text>Senha</Text>
          <TextInput
            value={form.senha}
            style={styles.input}
            onChangeText={(text) => updateForm("senha", text)}
            secureTextEntry={!form.exibirSenha}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text>Senha</Text>
          <TextInput
            value={form.senha}
            style={styles.input}
            onChangeText={(text) => updateForm("senha", text)}
            secureTextEntry={!form.exibirSenha}
          />
        </View>

        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text>Exibir senha?</Text>
          <Switch
            value={form.exibirSenha}
            onValueChange={(boleano) => updateForm("exibirSenha", boleano)}
          />
        </View>

        <Button title="Enviar Cadastro" onPress={() => handleSubmit()} />

        {showSubmit && (
          <Text>
            {form.nome}, {form.email}, {form.telefone}
          </Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 24,
    backgroundColor: "#fff",

    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    width: "100%",
  },
});
