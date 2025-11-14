

# *Cadastro de Produtos* 

*Usar o `Expo-Camera` para tirar fotos e gravar videos em telas separadas, acessar a galaria usando imagePicker, ler qrcode e codigo de barra.  
Utlizando a navegação botton tab*


### **Navegações**
<ul>
<li>AppNavigator.tsx -> navegações Stack dos botoões das funções da camera e Camera ImagePickerGallery VideoCamera QrCodeScanne  cameraAvancada(com zoom, flash e foco ) </li>
<li>CatalogNavigator.tsx -> navegação Stack do catalago e produto detalhes </li>
<li>MainTabNavigator.tsx -> navegação botton tab catalago e cadastrar Produto </li>
<li> NavigationTypes.ts -> Tipos das navegações </li>
</ul>

  
##  Bibliotecas e Funções-Chave

 As principais coisas que este projeto usa são:

* **`expo-image-picker`**:
    * `launchImageLibraryAsync()`

* **`expo-camera`**:
    * `useCameraPermissions()` e `useMicrophonePermissions()`
    * `<CameraView mode={modo}>`
    * `takePictureAsync()` (para fotos)
    * `recordAsync()` e `stopRecording()` (para vídeos)
---


