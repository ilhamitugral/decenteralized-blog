# Kullanılan Teknolojiler
* AVAX Fuji (C-Chain)
* Vanilla JS
* Ethers.js
* Solidity 0.8.0;
* HTML & CSS

# Nasıl Kurulur?
Tüm kaynak dosyalarını indirin ve `index.html` dosyasını çalıştırın.
> Not: Visual Studio Code üzerinde `Live Server` üzerinde çalıştırmanızda fayda var.

# Kendi Kontratımı Nasıl Çalıştırabilirim?
Sistem varsayılan olarak benim `deploy` etmiş olduğum blockchainde çalışmaktadır. Kendi akıllı sözleşmenizi oluşturabilirsiniz.
`Blog.sol` dosyasını https://remix.ethereum.org adresinde çalıştırın. Gerekli değişiklikleri yapın ve ardından `deploy` edin.
Deploy sonrasında `ABI` kodunu ve `contract` adresini `js/script.js` dosyası üzerinde değiştirin.

> Not: Kontratı `Ethereum` blockchaini üzerinde de çalıştırabilirsiniz. Gerekli RPC ayarlarını yaptıktan sonra `Solidity` destekleyen tüm blockchainlerde kullanabilirsiniz.

Dilediğiniz gibi kullanabilirsiniz. :)
