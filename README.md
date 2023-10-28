# Xamarin XALZ Decompress

<p align="left">
	<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/made%20with-TypeScript-blue"></a>
	<a href="#"><img src="https://img.shields.io/badge/platform-osx%2Flinux%2Fwindows-blueviolet"></a>
</p>

Xamarin is an open source platform for building modern, high-performance apps for iOS, Android, and Windows using .NET. Starting in May 2020, the Xamarin developer team incorporated LZ4 compression with the aim of decreasing the size of APK files. Currently, this compression is enabled by default. Therefore, I developed this script that makes unzipping easier, allowing you to export the files effectively to dnSpy.

- [Usage](#usage)
- [Running xamarin-xalz](#running-xamarin-xalz)

# Usage

You can do this in these three ways:
```sh
npm run start -- <source-dll> <dest-dll>
```

```sh
ts-node xamarin-xalz.ts <source-dll> <dest-dll>
```

```sh
xamarin-xalz <source-dll> <dest-dll>
```

# Running xamarin-xalz

```shell
┌─[joaojj@xamarin-xalz]─[/]
└──╼ $ xamarin-xalz System.Net.Http.dll System-changed.dll
[+] The file System-changed.dll has been saved!
```