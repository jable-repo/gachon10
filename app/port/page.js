import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
         고객사 : 현대자동차,기아자동차,현대모비스,서연이화,프라코,아이아,네패스,삼성SDI,
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/my.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}>최광철</div>
            <div className={styles.profile_info_general_year}>
              남 2003년 (만 21세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-7130-3248</div>
            <div class={styles.profile_label}>Email | cgc@asung.co.keyword_box</div>
            <div class={styles.profile_label}>전화번호 | 031-831-1539</div>
            <div class={styles.profile_label}>
              주소 | 경기도 안산시 본오동 
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>가천대학교 </div>
            <div className={styles.grid_item}>
              <div>대학교</div>
              <div>재학</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>아성프라텍</div>
            <div className={styles.grid_item}>
              <div>재직</div>
              <div>1년 2개월</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>대학생 명예보좌관2기</div>
          </div>
          <div>
            <div className={styles.grid_item}>자격증 / 어학</div>
            <div className={styles.grid_item}>환경기능사</div>
            <div className={styles.grid_item}>자동차정비기능사</div>
            <div className={styles.grid_item}>ITQ</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>

          <Link href="http://www.asung.co.kr/">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>아성프라텍</span>
            </button>
          </Link>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>MV 차종</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>MQ4PE 차종</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>DL3PE 차종</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>JAPE2 차종</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>CVPE 차종</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>KA4 PE 차종</span>
          </button>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>JK PE 차종</span>
          </button>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022. 03 ~</div>
              <div>재학</div>
            </div>
            <div>
              <div>
                <div>가천대 </div>
                <div>미래자동차</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div> ? / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022</div>
              <div>졸업</div>
            </div>
            <div>
              <div>
                <div>세경고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}
