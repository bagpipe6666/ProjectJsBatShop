// package com.example.assign05_6406021631035;

// import androidx.appcompat.app.AppCompatActivity;

// import android.os.Bundle;
// import android.os.CountDownTimer;
// import android.view.View;
// import android.widget.Button;
// import android.widget.ImageButton;
// import android.widget.TextView;


// import java.util.HashMap;
// import java.util.Random;

// public class MatchingGame extends AppCompatActivity implements View.OnClickListener {
//     private TextView time, score;

//     private int countScore = 0;
//     private CountDownTimer timer;
//     private Button button1;
//     private ImageButton [] cards = new ImageButton[16];
//     private int count = 0;

//     HashMap<Integer, Integer> imageIndex = new HashMap<Integer, Integer>();
//     HashMap<Integer, Integer> cardIndex = new HashMap<Integer, Integer>();

//     //base picture
//     private int [] ImageArr = {
//       R.drawable.apple, R.drawable.banana, R.drawable.coconut, R.drawable.grape, R.drawable.kiwi,
//             R.drawable.lemon, R.drawable.mango, R.drawable.orange, R.drawable.papaya, R.drawable.strawberry
//     };

//     //random picture
//     private int [] randomImage = new int[8];
//     private int []  flipCard = new int[2];
//     private int cardFliped = 0;
//     private int [] hasBeenFlip = new int[2];
//     private CountDownTimer playTime;


//     @Override
//     protected void onCreate(Bundle savedInstanceState){
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_matching_game);

//         button1 = (Button) findViewById(R.id.button1);
//         time = (TextView) findViewById(R.id.time);
//         score = (TextView) findViewById(R.id.score);

//         cards[0] = (ImageButton) findViewById(R.id.card1);
//         cards[1] = (ImageButton) findViewById(R.id.card2);
//         cards[2] = (ImageButton) findViewById(R.id.card3);
//         cards[3] = (ImageButton) findViewById(R.id.card4);
//         cards[4] = (ImageButton) findViewById(R.id.card5);
//         cards[5] = (ImageButton) findViewById(R.id.card6);
//         cards[6] = (ImageButton) findViewById(R.id.card7);
//         cards[7] = (ImageButton) findViewById(R.id.card8);
//         cards[8] = (ImageButton) findViewById(R.id.card9);
//         cards[9] = (ImageButton) findViewById(R.id.card10);
//         cards[10] = (ImageButton) findViewById(R.id.card11);
//         cards[11] = (ImageButton) findViewById(R.id.card12);
//         cards[12] = (ImageButton) findViewById(R.id.card13);
//         cards[13] = (ImageButton) findViewById(R.id.card14);
//         cards[14] = (ImageButton) findViewById(R.id.card15);
//         cards[15] = (ImageButton) findViewById(R.id.card16);

//         cards[0].setOnClickListener(this);
//         cards[1].setOnClickListener(this);
//         cards[2].setOnClickListener(this);
//         cards[3].setOnClickListener(this);
//         cards[4].setOnClickListener(this);
//         cards[5].setOnClickListener(this);
//         cards[6].setOnClickListener(this);
//         cards[7].setOnClickListener(this);
//         cards[8].setOnClickListener(this);
//         cards[9].setOnClickListener(this);
//         cards[10].setOnClickListener(this);
//         cards[11].setOnClickListener(this);
//         cards[12].setOnClickListener(this);
//         cards[13].setOnClickListener(this);
//         cards[14].setOnClickListener(this);
//         cards[15].setOnClickListener(this);


//         for (int i = 0; i < cards.length; i++) {
//             cards[i].setEnabled(false);
//         }

//         button1.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {

//                 for (int i = 0; i < cards.length; i++) {
//                     cards[i].setEnabled(true);
//                 }

//                 timer = new CountDownTimer(60000,1000) {
//                     @Override
//                     public void onTick(long millisUntilFinished) {
//                         time.setText(String.valueOf(++count));
//                     }

//                     @Override
//                     public void onFinish() {
//                         count = 0;
//                         time.setText("0");
//                         for (int i = 0; i < cards.length; i++) {
//                             cards[i].setImageResource(R.drawable.card);
//                             cards[i].setEnabled(false);
//                             button1.setEnabled(true);
//                         }
//                     }
//                 };

//                 timer.start();
//                 randomIma();
//                 button1.setEnabled(false);
//             }
//         });
//     }

//     public void randomIma() {

//         flipCard[0] = 0;
//         flipCard[1] = 99;


//         Random random = new Random();
//         //random 0 - 9
//         int index = random.nextInt(ImageArr.length); // 0
//         for (int i = 0; i < cards.length/2; i++) {
//             index++;
//             if (index == ImageArr.length) {
//                 index = 0;
//             }
//             randomImage[i] = ImageArr[index];
//         }

//         int index1 = random.nextInt(randomImage.length);
//         for (int i = 0; i < cards.length/2; i++) {
//             if (index1 > randomImage.length-1) {
//                 index1 = 0;
//             }
//             imageIndex.put(cards[i].getId(), index1);
//             cardIndex.put(cards[i].getId(), i);
//             index1++;
//         }

//         int index2 = random.nextInt(randomImage.length);
//         for (int i = 8; i < cards.length; i++) {
//             if (index2 > randomImage.length-1) {
//                 index2 = 0;
//             }
//             imageIndex.put(cards[i].getId(), index2);
//             cardIndex.put(cards[i].getId(), i);
//             index2++;
//         }

//     }

//     @Override
//     public void onClick(View v) {
//         int id = v.getId();
//         int randImage = imageIndex.get(id);
//         int cardId = cardIndex.get(id);

//         if (cardFliped < 2) {
//             flipCard[cardFliped] = randImage;
//             hasBeenFlip[cardFliped] = cardId;
//             cards[cardId].setImageResource(randomImage[randImage]);
//             cardFliped++;
//         }

//         if (cardFliped == 2) {
//             if (flipCard[0] == flipCard[1]) {
//                 flipCard[0] = 0;
//                 flipCard[1] = 99;
//                 countScore++;
//                 score.setText(String.valueOf(countScore));
//                 cardFliped = 0;
//             } else {
//                 flipCard[0] = 0;
//                 flipCard[1] = 99;
//                 playTime = new CountDownTimer(1000,1000) {
//                     @Override
//                     public void onTick(long millisUntilFinished) {

//                     }

//                     @Override
//                     public void onFinish() {
//                         cards[hasBeenFlip[0]].setImageResource(R.drawable.card);
//                         cards[hasBeenFlip[1]].setImageResource(R.drawable.card);
//                         cardFliped = 0;
//                     }
//                 }.start();
//             }
//         }

//     }
// }