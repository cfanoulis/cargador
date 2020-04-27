# Cargador: A CLI tool to convert YouTube playlists to MP3s
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcfanoulis%2Fcargador.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcfanoulis%2Fcargador?ref=badge_shield)


### NOTICE: If you use this tool to download songs, videos, or other copyrighted material, please consider contributing to the author of the content in some way. They usually depend on YouTube ads revenue to continue doing whatever it is you're doing. The author of this tool cannot be held liable of what has been done with it, as per the MIT licence

Imagine you like 5 songs, and you want to download them to your PC to listen, but Spotify (and others) are too hard on your wallet. SO what do you do? You use downloader sites and download them. Boom. Job done.


**But what do you do if you have 50, 100, or even 200 songs**

Well, you can't download them manually, right? Too much labour. And there are near to none playlist downloader sites.

Presenting `cargador`! The first (*I believe*) CLI-based playlist downloader. Simply :
```sh
cg <playlist> [location]
```
And `cargador` will download all the songs in that playlist. Simple, eh?

*And your daily fact: `cargador` means loader in Spanish. TMYK*


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcfanoulis%2Fcargador.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcfanoulis%2Fcargador?ref=badge_large)

## Prerequisites
- [ffmpeg](https://www.ffmpeg.org/download.html)

## Installation
```sh
# Using NPM:
npm i -g cargador

# Using Yarn
yarn global add cargador

# Using pnpm
pnpm add --global cargador
```

## Contributing
Pull requests are always welcome! Check the [good first issues](https://github.com/cfanoulis/cargador/labels/good%20first%20issue) and the [help wanted](https://github.com/cfanoulis/cargador/labels/help%20wanted) labels for things to work on.

## Legal

Copyright 2020 © [Charalampos Fanoulis](https://github.com/cfanoulis). Distributed under the [MIT licence](./LICENCE)

## Buy me a donut

Most of my projects are open-source, and they will stay so even if I run out of funds. However, should you want to fund this project, as well as my thirst for Spotify Premium, feel free to donate using the following ways:

| Method | Address | Notes |
|:------:|:-------:|:------|
|Patreon| [Pledge to me on Patreon](https://www.patreon.com/join/enkiel8029?) | Patrons get exclusive access to pre-release projects, discounts on comissions, exclusive support, behind-the-scenes posts and more!|
|Paypal| [Donate using PayPal](https://cfanoulis.page.link/donate-paypal)
|[Bitcoin](bitcoin:bc1q3e5jhh9qrk4g80ljlvu66u2dsr89v57g5madjr?message=Donation%20to%20Charalampos%27s%20OSS%20projects&time=1577294923)|`bc1q3e5jhh9qrk4g80ljlvu66u2dsr89v57g5madjr`|
|Stellar| `cfanoulis*keybase.io`| If your wallet or network doesn't support federation, use `GCVAESPQ3OSXZQCTLJNEXD35GA5CWXPQ6FG6JVBFIDNRRJIG77OKUB4I` as the address