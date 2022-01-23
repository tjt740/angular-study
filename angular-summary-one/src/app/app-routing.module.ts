import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { AuthGuard } from './auth/auth.guard';
import { KnowledgePoint1Component } from './pages/knowledge-point1/knowledge-point1.component';
import { KnowledgePoint2Component } from './pages/knowledge-point2/knowledge-point2.component';
import { KnowledgePoint3Component } from './pages/knowledge-point3/knowledge-point3.component';
import { KnowledgePoint4Component } from './pages/knowledge-point4/knowledge-point4.component';
import { KnowledgePoint5Component } from './pages/knowledge-point5/knowledge-point5.component';


const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
    // 路由守卫
    canActivate:[AuthGuard],
    children: [
      {
        path: 'knowledge-point1',
        component:KnowledgePoint1Component,
      },
      {
        path: 'knowledge-point2',
        component:KnowledgePoint2Component,
      },
      {
        path: 'knowledge-point3',
        component:KnowledgePoint3Component,
      },
      {
        path: 'knowledge-point4',
        component:KnowledgePoint4Component,
      },
      {
        path: 'knowledge-point5',
        component:KnowledgePoint5Component
      }
    ]
  },

  // 重定向页面
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  // 匹配不到路由时调用；
  {
    path: '**',
    component: NoFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
