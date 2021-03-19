# StockSports Challange

This project is an attempt of solutioning the [StockSports Challange](https://github.com/gabrieladias99/challengestocksports/blob/main/README.md).

## How do I run it locally?

If you are fammiliar with GIT, you can clone the repository. You just need to click the on "Code" button on the repository folder, and then, copy the HTTPS link. On your GIT terminal, you will need to run the follow command:

```bash
git clone <link>
```

Alternitevely, you can just download the repository as a ZIP file.

- Install node modules inside the project folder:

```bash
npm install
```

From now on, you will need Android Studio to simulate the application. Just in case you still don't have Android Studio installed, here's a [tutorial](https://reactnative.dev/docs/environment-setup) that might help you to download and set it up.

In Android Studio, open the android folder in the project directory. Then, start the simulation clicking on the AVD manager button. Make sure to use the Android 10 (Q) and the API 29. Just hit the green play button, and you should be able to see the simulator in a few seconds. If it doesn't work as expected, check out the aforementioned tutorial.

Now, open a terminal in the project's root directory, and run:

```bash
npx react-native start
```

to start Metro.

Open a new terminal, then run:

```bash
npx react-native run-android
```

You should see the application simulation running by now.

## Errors

In case you get an server erro (500), you might want to delete node modules, and install it again.

## Support

If you need any help, feel free to send me an email. - Email: vrodriguestome@gmail.com
