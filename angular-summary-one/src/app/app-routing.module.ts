import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { AuthGuard } from './auth/auth.guard';
import { KnowledgePoint1Component } from './pages/knowledge-point1/knowledge-point1.component';
import { KnowledgePoint2Component } from './pages/knowledge-point2/knowledge-point2.component';
import { KnowledgePoint3Component } from './pages/knowledge-point3/knowledge-point3.component';
import { KnowledgePoint4Component } from './pages/knowledge-point4/knowledge-point4.component';
import { KnowledgePoint5Component } from './pages/knowledge-point5/knowledge-point5.component';
import { KnowledgePoint6Component } from './pages/knowledge-point6/knowledge-point6.component';
import { KnowledgePoint7Component } from './pages/knowledge-point7/knowledge-point7.component';
import { KnowledgePoint8Component } from './pages/knowledge-point8/knowledge-point8.component';
import { KnowledgePoint9Component } from './pages/knowledge-point9/knowledge-point9.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';


const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    // 路由守卫
    canActivate: [AuthGuard],
    children: [
      {
        path: 'knowledge-point1',
        component: KnowledgePoint1Component,
      },
      {
        path: 'knowledge-point2',
        component: KnowledgePoint2Component,
      },
      {
        path: 'knowledge-point3',
        component: KnowledgePoint3Component,
      },
      {
        path: 'knowledge-point4',
        component: KnowledgePoint4Component,
      },
      {
        path: 'knowledge-point5',
        component: KnowledgePoint5Component,
      },
      {
        path: 'knowledge-point6',
        component: KnowledgePoint6Component,
      },
      {
        path: 'knowledge-point7',
        component: KnowledgePoint7Component,
      },
      {
        path: 'knowledge-point8',
        component: KnowledgePoint8Component,
      },
      {
        path: 'knowledge-point9',
        component: KnowledgePoint9Component,
      },
      {
        path: 'lifecycle-hook',
        component: LifecycleComponent,
      },
    ],
  },

  // 重定向页面
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  // 匹配不到路由时调用；
  {
    path: '**',
    component: NoFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
