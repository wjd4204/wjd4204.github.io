---
title: "[Java] 4-1. 학급 회장(해쉬)"

categories:
- 코딩 테스트

tags:
- [codingTest, HashMap, DataStructure]

toc: true

toc_sticky: true

date: 2024-04-02

last_modified_at: 2024-04-03

---


> Section4. HashMap, TreeSet (해쉬, 정렬지원 Set)

- 오늘부터 코딩 테스트를 위한 첫 블로그를 작성이자 농사를 시작해보고자 한다. ~~잘 부탁드려요ㅎㅎ~~
- 기존 Section1~3까지의 문제들은 간단한 문법을 이용하기에 이하생략하도록 하겠다.
  <br>

## :round_pushpin: 문제

-----
>설명
> >학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
>
> 입력
> > 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.
>
> 출력
> >학급 회장으로 선택된 기호를 출력합니다.
>
> 예시 입력
> >15<br>BACBACCACCBDEDE
>
> 예시 출력
> >c
<br>

## :round_pushpin: 해결방안

-------
### :pencil2: 방안 모색

- Section4에서는 HashMap과 TreeSet 이 2개의 알고리즘을 주제로 하고 있으며, 해당 문제는 HashMap으로 푸는 것이 좋다고
  생각하였다.
1. N개의 수로 이루어진 문자열의 각 문자에 대해 HashMap<Character, Integer>을 사용하여
   추가해준다. 이 때, 처음집어넣는 문자는 put을 통해 1을 넣지만, 있는 문자는 contains를 사용하여
   문자의 존재유무를 확인하고 key에 대한 object를 1 증가시켜주고 다시 반환한다.

### :pencil2: 코드 구현

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class P01_학급회장 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();
        String str = sc.nextLine();

        HashMap<Character, Integer> vote = new HashMap<>();
        List<Character> name = new ArrayList<>();
        for(int i=0;i<n;i++){
            if(vote.containsKey(str.charAt(i))){
                int cnt = vote.get(str.charAt(i));
                cnt += 1;
                vote.put(str.charAt(i), cnt);
            }
            else{
                vote.put(str.charAt(i), 1);
                name.add(str.charAt(i));
            }
        }

        int max = 0;
        char maxChar = 0;
        for(int i=0;i<vote.size();i++){
            if(vote.get(name.get(i)) > max){
                max = vote.get(name.get(i));
                maxChar = name.get(i);
            }
        }

        System.out.println(maxChar + "");

    }
}

```
---
- 이번 포스트를 포함하여 앞으로 사용하게 될 문제들은 인프런의 "자바(Java) 알고리즘 문제풀이 입문: 코딩테스트 대비"
를 기반으로 진행할 예정이다. :smile:
