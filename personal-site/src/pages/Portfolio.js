import Entry from './Entry.js'

export default function Portfolio() {
    return (
      <div className="Portfolio">
        <h1>Selected Works</h1>

        <div>
            <h2>Selected Programming Works</h2>
            <Entry link="https://dsmaugy.github.io/ceeder/" title="Ceeder Example" description="Designed in collaboration with Darwin Do, Samantha Trimboli, and Jack Li, for CPSC 478 - Computer Graphics, Spring 2023." />
        </div>

        <div>
            <h2>Selected Writing Samples</h2>
            <Entry link="docs/rd_thesis_s23.pdf" title="Senior Project Capstone Report" description="Write-up, including proposal, motivation, results, and discussion for my senior project in fulfillment of the Computer Science Bachelor's of Science. Written for CPSC 490 - Senior Project. Advised by Professor James Glenn, Spring 2023." />

            <Entry link="docs/rd_cc_s23.pdf" title="Culture Critique" description="Writing exercise critiquing a media artifact. Written for ENGL 121 - Writing about Cities, Spring 2023." />
            <Entry link="docs/rd_pm_s23.pdf" title="Policy Memo" description="Writing exercise drafting a policy memo addressing a specific community issue. Written for ENGL 121 - Writing about Cities, Spring 2023." />

            <Entry link="docs/rd_se_aau_f22.pdf" title="Architecture Short Essay" description="Short essay basing an argument on a selected architectural object or idea. Written for ARCH 280 - American Architecture and Urbanism, Fall 2022." />
            <Entry link="docs/rd_final_eamaf_f22.pdf" title="Film Analysis" description="Final paper, analyzing an American film's relation to a traditionally asian genre. Written for FILM 307 - East Asian Martial Arts Film, Fall 2022." />
            <Entry link="docs/rd_mid_eamaf_f22.pdf" title="Film analysis" description="Midterm paper, analyzing a classic Japanese film and it's relation to a genre definition. Written for FILM 307 - East Asian Martial Arts Film, Fall 2022." />

            <Entry link="docs/rd_final_im_s22.pdf" title="Media Reflection" description="Final paper analyzing the medium of plastic from a literary, social, and philosophical perspective. Written for FILM 160 - Introduction to Media, Spring 2022." />
            <Entry link="docs/rd_objmed_im_s22.pdf" title="Object Mediation" description="Physical, emotional, and social analysis of a school backpack. Written for FILM 160 - Introduction to Media, Spring 2022." />

            <Entry link="docs/rd_final_it_f19.pdf" title="Death Stranding and Travel" description="Final paper analyzing the narrative and gameplay significance of travel in Death Stranding (2019). Written for ENGL 115 - The Invention of Travel, Fall 2019." />
        </div>
      </div>
    );
  }