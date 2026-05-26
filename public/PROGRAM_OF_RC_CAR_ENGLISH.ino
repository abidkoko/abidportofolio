// // #include <LiquidCrystal_I2C.h>
// // #include <Wire.h>

// #define IN1 7         //motor 1
// #define IN2 6         //motor 2
// #define IN3 5         //motor 3
// #define IN4 4         //motor 4
// #define lampufront 8  // and this one for lamp in the font of the car
// #define lampuback 9   // and this one for lamp in the back of the car
// #define horn 10       //this one u can make it for horn
// #define ENA 3         //SPEED CONTROL MOTOR
// #define ENB 11        //SPEED CONTROL MOTOR 2

// // LiquidCrystal_I2C lcd(0x27, 16, 2);  // Sesuaikan alamat dan ukuran LCD
// byte heart[8] = {
//   0x00,  // 00000
//   0x0A,  // 01010
//   0x1F,  // 11111
//   0x1F,  // 11111
//   0x1F,  // 11111
//   0x0E,  // 01110
//   0x04,  // 00100
//   0x00   // 00000
// };

// int RSpeed = 255;
// int LSpeed = 255;

// char data;

// void setup() {
//   // lcd.init();
//   // lcd.backlight();

//   Serial.begin(9600);
//   pinMode(IN1, OUTPUT);
//   pinMode(IN2, OUTPUT);
//   pinMode(IN3, OUTPUT);
//   pinMode(IN4, OUTPUT);
//   pinMode(lampufront, OUTPUT);
//   pinMode(lampuback, OUTPUT);
//   pinMode(horn, OUTPUT);

//   // lcd.setCursor(0, 0);
//   // lcd.print("BY: ABID & ARKA");
//   // delay(3500);
//   // lcd.clear();
//   // lcd.setCursor(0, 0);
//   // lcd.print("   MISS RERE   ");
//   // lcd.setCursor(0, 1);
//   // lcd.print("-----------------");
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(15, 0);
//   // lcd.write(byte(0));
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(14, 0);
//   // lcd.write(byte(0));
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(13, 0);
//   // lcd.write(byte(0));
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(0, 0);
//   // lcd.write(byte(0));
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(1, 0);
//   // lcd.write(byte(0));
//   // delay(6000);
//   // lcd.clear();
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(6, 0);
//   // lcd.write(byte(0));
//   // lcd.createChar(0, heart);
//   // lcd.setCursor(8, 0);
//   // lcd.write(byte(0));
//   // lcd.setCursor(5, 1);
//   // lcd.print("  v  ");

//   //all over output because those are only can give u 1 or 0. 1 is high for active, and 0 is low for deactive.
// }

// void loop() {
//   if (Serial.available() > 0) {
//     data = Serial.read();
//     switch (data) {
//       case 'F': TurnLeft(); break;
//       case 'B': TurnRight(); break;
//       case 'R': backward(); break;
//       case 'L': forward(); break;
//       case 'S': Stop(); break;
//       case 'W': LIGHTFRONT(1); break;
//       case 'w': LIGHTFRONT(0); break;
//       case 'U': LIGHT(1); break;
//       case 'u': LIGHT(0); break;
//       case 'V': HORN(1); break;
//       case 'v': HORN(0); break;
//       case 'X': hazard(1); break;
//       case 'x': hazard(0); break;
//       case '0': speedcar(0, 0); break;
//       case '1': speedcar(55, 55); break;
//       case '2': speedcar(80, 80); break;
//       case '3': speedcar(105, 105); break;
//       case '4': speedcar(130, 130); break;
//       case '5': speedcar(155, 155); break;
//       case '6': speedcar(165, 165); break;
//       case '7': speedcar(180, 180); break;
//       case '8': speedcar(205, 205); break;
//       case '9': speedcar(230, 230); break;
//       case 'q': speedcar(255, 255); break;
//     }
//   }
// }
// void forward() {  //ini maju biasa aja
//   digitalWrite(IN1, HIGH);
//   digitalWrite(IN2, LOW);
//   digitalWrite(IN3, HIGH);
//   digitalWrite(IN4, LOW);
// }
// void backward() {  //ini mundur
//   digitalWrite(IN1, LOW);
//   digitalWrite(IN2, HIGH);
//   digitalWrite(IN3, LOW);
//   digitalWrite(IN4, HIGH);
// }
// void TurnRight() {  //kanan
//   digitalWrite(IN1, LOW);
//   digitalWrite(IN2, HIGH);
//   digitalWrite(IN3, HIGH);
//   digitalWrite(IN4, LOW);
// }
// void TurnLeft() {  //kiri
//   digitalWrite(IN1, HIGH);
//   digitalWrite(IN2, LOW);
//   digitalWrite(IN3, LOW);
//   digitalWrite(IN4, HIGH);
// }
// void Stop() {
//   digitalWrite(IN1, LOW);
//   digitalWrite(IN2, LOW);
//   digitalWrite(IN3, LOW);
//   digitalWrite(IN4, LOW);
// }
// void LIGHTFRONT(int a) {  //lampu nyala nya buat yg depan
//   digitalWrite(lampufront, a);
// }
// void LIGHT(int a) {  //lampu nyala buat yg belakang
//   digitalWrite(lampuback, a);
// }
// void HORN(int a) {  //ini buat klakson ae
//   digitalWrite(horn, a);
// }
// void hazard(int a) {  //ini untuk off nya saja
//   digitalWrite(lampufront, a);
// }
// void speedcar(int a, int b) {
//   analogWrite(ENA, a);
//   analogWrite(ENB, b);
// }