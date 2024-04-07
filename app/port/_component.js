import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_white}>
          <div className={styles.school_title_top}>
            <h1 className={styles.school_title}>경력 </h1>
            <div className={styles.school_title_down}>
              <div>총 1년 2개월</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2023. 02 ~ </div>
            <div>1년 2개월</div>
          </div>
          <div>
            <div>아성프라텍 </div>
            <div>기술연구소   R&D팀 팀원</div>
          </div>
          <div>
            <div>
              <div>주요직무</div>
              <div>
                현재 CT1 차종 EV4 인테리어 부품 개발 및 PM을 하고 있습니다. 
                <br />
                <br />
                현재 CT1차종 범퍼 SUB 품목 금형이관 개발  검토중 <br />
                <br />
                현재까지 MV차종 MQ4 PE차종 TSD A-01차종 서브매니저로서 개발선임
                들의 원할한 업무를 진행 할 수 있도록 업무를 진행하였습니다. 
                <br />
                <br />
                또한 개발직무와 PM직무를 병행하고 있어 소재사와 부식업체와 
                칼라 평가를 진행하며 소재 샘플 및 측색값을 논의 하며 감성품질을 만족하였습니다.
                <br />
                <br />
                 기술에 대한 문의가 있으시면 010-7130-3248로 연락 주시면
                감사하겠습니다.
                <br />
              </div>
              <div>부품개발자,CATIA, NX CAD, QMS </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2023. 01 ~ 2023. 05</div>
            <div>5개월</div>
          </div>
          <div>
            <div>대한민국 국회 대학생 명예보좌관2기 </div>
            <div>명예비서관 </div>
          </div>
          <div>
            <div>
              정성호 4선 국회의원
              <br /> - 정책자문단
              <br /> - 정당 분석 
              <br /> <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
