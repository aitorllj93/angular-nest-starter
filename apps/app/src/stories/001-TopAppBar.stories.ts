
import { moduleMetadata } from '@storybook/angular';
import { MdcTopAppBarModule, MdcIconModule, MdcIconRegistry } from '@angular-mdc/web';

export default {
  title: 'UI - Top App Bar',
  decorators: [
    moduleMetadata({
      imports: [
        MdcTopAppBarModule,
        MdcIconModule,
      ],
      providers: [MdcIconRegistry]
    })
  ]
}

export const Fixed = () => ({
  template: `
    <div class="storybook-wrapper">
      <mdc-top-app-bar fixed [scrollTarget]="standardContent" style="max-width: 60vw">
        <mdc-top-app-bar-row>
          <mdc-top-app-bar-section align="start" title="App">
            <button mdcTopAppBarNavIcon>
              <mdc-icon fontSet="mdi" fontIcon="mdi-menu"></mdc-icon>
            </button>
          </mdc-top-app-bar-section>
          <mdc-top-app-bar-section align="end">
            <button mdcTopAppBarActionItem><mdc-icon fontSet="mdi" fontIcon="mdi-download"></mdc-icon></button>
            <button mdcTopAppBarActionItem><mdc-icon fontSet="mdi" fontIcon="mdi-printer"></mdc-icon></button>
            <button mdcTopAppBarActionItem><mdc-icon fontSet="mdi" fontIcon="mdi-bookmark"></mdc-icon></button>
          </mdc-top-app-bar-section>
        </mdc-top-app-bar-row>
      </mdc-top-app-bar>
      <div class="demo-app-bar-content" #standardContent>
        Consectetur quis nostrud incididunt dolore irure aliquip veniam commodo aliqua anim eiusmod sit id. Non occaecat enim labore pariatur aute ex. Ut cupidatat enim nulla officia velit ad laboris. Eiusmod nostrud esse excepteur proident pariatur. Nisi minim laboris labore consectetur. Esse in ea in ut sint enim ipsum fugiat non exercitation.

        Irure proident incididunt quis fugiat ex est cupidatat. Est incididunt exercitation eiusmod qui occaecat officia laborum. Commodo mollit consequat culpa esse cillum do.

        Do et sit commodo aliquip id Lorem. Sit velit anim incididunt qui officia nulla sint magna tempor amet do Lorem cillum. Laborum mollit excepteur incididunt anim et aute et. Cupidatat id non id nulla nisi elit cupidatat.

        Aute nulla magna cupidatat dolor voluptate duis deserunt nulla proident. Qui nostrud enim consectetur sunt aute occaecat fugiat velit consequat proident. Labore nisi incididunt occaecat id magna do deserunt ad nulla duis officia. Voluptate consequat in et commodo nisi id do.

        Deserunt nisi sunt veniam proident deserunt ex veniam. Sit fugiat adipisicing id aliqua adipisicing enim. Id excepteur voluptate velit ullamco.

        Consequat ad velit incididunt aute fugiat voluptate. Lorem laborum est Lorem ad reprehenderit adipisicing deserunt. Do ea nulla irure Lorem exercitation culpa. Excepteur ea aliqua Lorem amet excepteur sit aliqua ut cupidatat aliqua amet enim.

        Dolore sint enim sunt aliqua qui dolore voluptate ipsum labore ut tempor. Voluptate occaecat est ut pariatur occaecat sint voluptate. Consequat sint qui nisi consequat eu non enim sit. Duis aliquip ullamco est laborum.

        Pariatur tempor et ex do. Occaecat dolor tempor voluptate fugiat. Reprehenderit elit eu commodo voluptate. Commodo fugiat officia proident exercitation laborum non. Reprehenderit consequat deserunt Lorem incididunt nostrud culpa incididunt commodo aliquip deserunt excepteur exercitation proident in. Reprehenderit sunt ex nostrud eiusmod duis occaecat ipsum ea eiusmod ipsum quis adipisicing. Do ea consequat labore duis magna pariatur enim anim do laborum sint magna enim.

        Consectetur magna reprehenderit anim cillum culpa fugiat qui ex aute est. Aliquip sunt cillum deserunt duis qui quis commodo adipisicing labore ad pariatur pariatur esse. Laboris quis laboris exercitation aliquip in est amet ex proident. Ea in ad officia mollit ut aliqua officia exercitation proident ullamco ad nulla sit voluptate. Voluptate ea incididunt proident aute ex elit proident incididunt ea cillum sint laboris est officia. Elit proident nulla occaecat occaecat eiusmod eiusmod proident mollit Lorem ex aute.

        Dolor sit quis do tempor reprehenderit sunt incididunt consectetur ipsum sint labore. Eu amet in velit irure deserunt eu cillum cillum fugiat dolore. Deserunt aliquip id aute eiusmod sit aliquip. Aliqua amet dolor ipsum quis Lorem ex enim sunt occaecat velit dolore. Aliqua irure amet Lorem nulla eiusmod aliqua aliqua nulla nostrud nostrud in sunt consectetur. Cupidatat non tempor voluptate ea mollit id et esse laboris enim veniam laboris. Nulla do ad ea ex minim cillum consectetur sit do dolor occaecat.
      </div>
    </div>
  `
});
