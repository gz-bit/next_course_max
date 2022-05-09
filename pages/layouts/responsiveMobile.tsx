// https://coder-coder.com/build-flexbox-website-layout/


import Footer from '../../components/layout/Footer'
import css from './responsiveStyles.module.scss'

const Evernotes = () => {

  const crumbs = [
    {link: '/', caption: 'Home'},
    {link: '/layouts', caption: 'Layouts'},
    {link: '/layouts/responsiveMobile',caption: 'Responsive'}    
  ]

  return (
    <main className={css.main}>
    Main
  
    <header className={css.header}>
        Header
    </header>

    <section className={css.hero}>
        Hint
        <p>
          To see how the responsive layout works 
          reduce the width to less than 640px
          or make the window wider than 1200px (75rem).
          .
        </p>
    </section>

    <div className={css.wrapper}>
    <div className={css.flexcontainer}>
      <section className={css.content}>
          Content
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
          </p>
      </section>

      <aside className={css.sidebar}>
          Sidebar
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sumenda potius quam expetenda. 
            Nihil opus est exemplis hoc facere longius.
          </p>
      </aside>
    </div>
    </div>

    <div  className={css.footer}>
      <Footer crumbs={crumbs} />
    </div>
    
</main>
  )
}
export default Evernotes