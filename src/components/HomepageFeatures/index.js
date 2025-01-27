import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/*
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
*/

const FeatureList = [
  {
    title: 'A local branch of the national ACM',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We focus on bringing interesting speakers to campus, holding fun competitions and educational events.
      </>
    ),
  },
  {
    title: 'Open to all UMass Lowell students, faculty, and staff',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Want to learn more about new topics in Computer Science? Join us at our weekly meetings to learn, build, and connect.
      </>
    ),
  },
  {
    title: 'Optional Membership',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        While optional, membership to the national ACM includes access to ACM's Digital Library, ACM conferences, and 
        ACM's Special Interest Groups. 
        <div class='link'>
        <a href='https://www.acm.org/membership'>Learn more here</a> 
        </div>
        
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      
      <div className="text--center padding-horiz--md">
        <Card sx={{minWidth: 150, minHeight: 150,backgroundColor: 'lightgrey'}}>
          <CardContent>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
