// basic data
const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];



// root style object
let rootStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '1vw',
  width: '100vw',
  minHeight: '100vh',
  height: 'auto',
  margin: '2vw auto',
  gridAutoRows: 'minmax(150px, auto)'
};

// children style object
// 각 학생 div의 style object
let childrenStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  padding: '1vw',
};

// mobile style object
let mediaQueries = {
  'max-width: 600px': {
    root: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridAutoRows: '120px',

      children: {
        minHeight: '120px',
      },
    },
  },
// tablet style object
  'min-width: 601px and max-width: 900px': {
    root: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(150px, auto)',

      children: {
        minHeight: '150px',
      },
    },
  },
}
